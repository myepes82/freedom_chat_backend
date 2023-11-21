import { logDebug, logError, logWarn } from "../../common/utils/logger.util";
import Message from "../entities/message.entity";
import crypto from "crypto"
import fs from "fs"
import path from "path"
import { ICryptMessageService } from "./interfaces/cryptMessageService.interface";

export default class CryptMessageService implements ICryptMessageService {

    private readonly _publicKey: string;
    private readonly _privateKey: string;

    constructor() {
        const { publicKey, privateKey } = this.readEncryptionKeys()
        this._publicKey = publicKey
        this._privateKey = privateKey
    }

    private readPrivateKey(): string {
        const privateKeyPath: string = path.resolve("/app/security/private.pem")
        logWarn('Reading private key at path: {}', privateKeyPath)
        const privateKey = fs.readFileSync(privateKeyPath, { encoding: "utf-8" })
        logDebug('File loaded successfully')
        return privateKey
    }
    private readPublicKey(): string {
        const publicKeyPath: string = path.resolve("/app/security/public.pem")
        logWarn('Reading public key at path: {}', publicKeyPath)
        const publicKey = fs.readFileSync(publicKeyPath, { encoding: "utf-8" })
        logDebug('File loaded successfully')
        return publicKey
    }
    private readEncryptionKeys(): { publicKey: string, privateKey: string } {
        try {
            return {
                publicKey: this.readPublicKey(),
                privateKey: this.readPrivateKey()
            }
        } catch (error) {
            logError('Encryption keys could be found')
            process.exit(1)
        }
    }
    encrypt(message: Message): Message {
        try {
            const contentBuffer: Buffer = Buffer.from(message.content, "utf-8")
            const crypt = crypto.publicEncrypt(this._publicKey, contentBuffer)
            return message.withContent(crypt.toString('base64'))
        } catch (error) {
            logWarn('An error has occurred while encrypting message content: {}', error)
            throw error
        }
    }
    decrypt(message: Message): Message {
        try {
            const contentBuffer: Buffer = Buffer.from(message.content, 'base64')
            const decrypted = crypto.privateDecrypt(this._privateKey, contentBuffer)
            return message.withContent(decrypted.toString('utf-8'))
        } catch (error: any) {
            logWarn('An error has occurred while decrypting message content: {}', error)
            throw error
        }
    }
}