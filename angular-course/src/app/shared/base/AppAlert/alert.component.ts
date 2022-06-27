import { Component, Input, OnInit } from "@angular/core";
import { PositionX, PositionY, Status } from "app/types";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})

export class AlertComponent implements OnInit{
    statusClass = '';

    @Input() title:string = '';
    @Input() description:string = '';
    @Input() status:Status = '';
    @Input() positionX:PositionX = 'right';
    @Input() positionY:PositionY = 'top';

    ngOnInit(): void {
        if(this.status){
            this.statusClass = `app-alert--${this.status}`;
        }
    }
}