import { Component } from "@angular/core";

@Component({
    selector: 'task3',
    templateUrl: './task3.component.html',
    styleUrls: ['./task3.component.scss']
})

export class Task3Component{
    showPassword:boolean = false;
    logs: Array<boolean> = [];
    
    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    handleDisplayDetails() {
        this.togglePassword();
        this.logs.push(this.showPassword);
    }
}