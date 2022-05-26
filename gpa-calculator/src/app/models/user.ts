export class User{
    _id?: number;
    email:string;
    name: string;
    surname: string;
    collegue: string;
    password: string;

    constructor(email:string,name:string, surname:string, collegue: string, password:string){
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.collegue = collegue;
        this.password = password;
    }
}