import { Component } from "@angular/core";

@Component({
    selector: 'task2',
    templateUrl: './task2.component.html',
    styleUrls: ['./task2.component.scss']
})

export class Task2Component{
    userName:string = '';

    handlerEmptyUserName(){
        this.userName = '';
    }
}