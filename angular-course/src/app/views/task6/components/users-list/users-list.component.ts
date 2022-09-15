import { Component, Input } from "@angular/core";
import { User } from "app/shared/model/user.model";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent {
    private _users: Array<User> = [];
    
    @Input() set users(value: Array<User>) {
        this._users = value;
    }

    get users(): Array<User>  {
        return this._users;
    }

    @Input() title: string = '';
    
}