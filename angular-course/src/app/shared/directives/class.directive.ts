import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Class } from 'app/types';

@Directive({
    selector: '[customClass]',
})

export class CustomClassDirective implements OnInit{
    private _customClass: Class = '';

    constructor(private el: ElementRef) { }
    
    @Input() set customClass(value: Class) {
        this._customClass = value;
        const [ target ] = this.el.nativeElement.children;
        target.classList.add(this.customClass);
    };

    get customClass():Class {
        return this._customClass;
    }
    
    ngOnInit() {
        console.log(this.el.nativeElement)
    }
}