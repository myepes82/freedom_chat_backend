export class UserModel {
    id: string;
    name: string;
    email: string;
    user: string;

    constructor(id: string, name: string, email: string, user: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.user = user;
    }
}