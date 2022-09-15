import { Component, Input } from "@angular/core";
import { UserService } from "app/views/task6/services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent {
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() isActive: boolean = false;

    constructor(public userService: UserService) {}

    get buttonText() {
        const text = 'Set to';
        return this.isActive ? `${text} Active` : `${text} Inactive`;
    }
}