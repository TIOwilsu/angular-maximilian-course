import { Component, Input, OnInit } from "@angular/core";
import { Button } from "app/interfaces";

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: [
        '../../../../styles/index.scss',
        './button-group.component.scss'
    ]
})

export class ButtonGroupComponent implements OnInit{

    public _class: string = '';

    @Input() aligment: string = '';
    @Input() class: string = '';
    @Input() buttons: Array<Button> = [];

    ngOnInit(): void {
        if(this.aligment){
            this._class =`btn-group-${this.aligment}`;
        }

        if(this.class){
            this._class = `${this._class} ${this.class}`;
        }
    }

}