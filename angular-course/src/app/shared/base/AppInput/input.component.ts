import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
   @Input() model: any;
   @Input() placeholder:string = '';
   @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();

   onChange(value: any) {
    this.modelChange.emit(value);
   }
}