import { Component } from "@angular/core";
import { UserService } from "./services/user.service";

@Component({
    selector: 'app-task6',
    templateUrl: './task6.component.html',
    styleUrls: ['./task6.component.scss']
})

export class Task6Component {
    constructor (public userService: UserService) {}
}