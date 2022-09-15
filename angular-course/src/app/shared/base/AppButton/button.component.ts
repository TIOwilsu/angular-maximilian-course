import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Status } from "app/types";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: [
       
        './button.component.scss'
    ]
})

export class ButtonComponent implements OnInit {
    public _class: string = '';
    
    @Input() ariaLabel?: string;
    @Input() type?: string;
    @Input() status?: Status;
    @Input() class?:string ;
    @Input() close?: boolean;
    @Input() disabled?:boolean;
    @Input() routerLink?: string;
    @Input() active?: boolean;
    @Input() routerLinkActive: string = 'active';
    @Output() clickEvent = new EventEmitter();

    ngOnInit() {
        if(this.status){
            this._class = `btn-${this.status}`;
        }

        if(this.class){
            this._class = `${this._class} ${this.class}`;
        }
        
    }

    click() {
        this.clickEvent.emit();
    }
}
