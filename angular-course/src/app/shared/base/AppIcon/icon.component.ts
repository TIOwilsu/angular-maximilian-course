import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

export class IconComponent {
    @Input() gliffy: string = '';
    @Input() customSrc: string = ''
    @Input() name:string= '';
    @Input() class:string = '';
    @Input() viewBox:string = '';
    @Input() svgClass:string = '';
    @Input() svgAriaLabel:string = '';
    @Input() stretch:boolean = false;
    @Input() style:object = {};

    get src() {
        return !this.customSrc ? 
            `assets/icons/${this.gliffy}.svg` : 
            this.customSrc;
    }
}