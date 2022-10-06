import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss']
})

export class BackdropComponent implements OnInit{
    
    public _class: string = '';

    @Input() show: boolean = false;
    @Input() effect: string = 'fade';
    @Input() type: string = '';
    @Input() class: string = '';

    ngOnInit(): void {
        if(this.type){
            this._class = `${this.type}-backdrop`;
        }

        if(this.effect){
            this._class = `${this._class} ${this.effect}`;
        }

        if(this.class){
            this._class = `${this._class} ${this.class}`;
        }
    }
    
}