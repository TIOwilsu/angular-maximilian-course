import { Injectable } from "@angular/core";
import { User } from "app/shared/model/user.model";

@Injectable()
export class UserService {
    private users: Array<User> = [
        {
            id: '#022034920340',
            name: 'Wilson',
            isActive: true
        },
        {
            id: '#022034920341',
            name: 'Matheus',
            isActive: true
        },
        {
            id: '#022034920342',
            name: 'Luccas',
            isActive: false
        },
        {
            id: '#022034920343',
            name: 'Luciane',
            isActive: false
        },
        {
            id: '#022034920344',
            name: 'Wilson Pai',
            isActive: true,
        },
        {
            id: '#022034920345',
            name: 'Leonardo',
            isActive: false
        },
        {
            id: '#022034920346',
            name: 'Pedro',
            isActive: false
        },
        {
            id: '#022034920347',
            name: 'Marcos',
            isActive: true
        },
        {
            id: '#022034920348',
            name: 'Nunes',
            isActive: false
        },
        {
            id: '#022034920349',
            name: 'Sebastiao',
            isActive: true
        },
    ];

    constructor() {}

    getActiveUsers(): Array<User> {
        return this.users.filter(user => user.isActive);
    }

    getInactiveUser(): Array<User> {
        return this.users.filter(user => !user.isActive);
    }

    addUser(user: User) {
        this.users.push(user);
    }

    toggleUser(id: string, isActive:boolean) {
        const foundUser:User = this.users.find(user => user.id === id) as User;
        foundUser.isActive = isActive;
    }
}