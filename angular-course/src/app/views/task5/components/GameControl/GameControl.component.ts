import { Component, EventEmitter, Output, } from "@angular/core";

@Component({
    selector: 'game-control',
    templateUrl: './GameControl.component.html',
    styleUrls: ['./GameControl.component.scss']
})

export class GameControl {
    total: number = 0;
    started: boolean = false;
    TIMEOUT:number = 1000;
    settimeout: ReturnType<typeof setTimeout> = setInterval(() => {}, this.TIMEOUT);

    @Output() onStart:EventEmitter<number> = new EventEmitter();

    start (){
        this.settimeout = setInterval(() => {
            this.started = true;
            this.add();
            this.onStart.emit(this.total);
        }, this.TIMEOUT);
    }   

    stop () {
        this.started = false;
        clearInterval(this.settimeout);
    }

    add() {
        this.total++;
    }
}