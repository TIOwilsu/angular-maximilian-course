import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-offcanvas',
    templateUrl: './offcanvas.component.html',
    styleUrls: ['./offcanvas.component.scss']
})

export class OffCanvasComponent implements OnInit {

    public _class: string = '';
    public ariaLabelledby: string = '';
    public show: boolean = true;

    @Input() id: string = '';
    @Input() title: string = '';
    @Input() side: string = 'start';
    @Input() class: string = '';

    ngOnInit() {
        if(this.id) {
            this.ariaLabelledby = `${this.id}Label`;
        }

        if(this.side){
            this._class = `offcanvas-${this.side}`
        }

        if(this.class){
            this._class = `${this._class} ${this.class}`;
        }
    }

    toggle() {
        this.show = !this.show;
    }
}

