export class UserModel {
    id: string;
    name: string;
    email: string;
    user: string;
    password: string;

    constructor(id: string, name: string, email: string, user: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.user = user;
        this.password = password;
    }
}