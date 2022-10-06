import { Component, Input } from "@angular/core";

@Component({
    selector: 'number',
    templateUrl: './Number.component.html',
    styleUrls: ['./Number.component.scss']
})

export class Number {
    types: object = {
        odd: {
            name: 'odd',
            class: 'bg-primary'
            
        },
        even: {
            name: 'even',
            class: 'bg-dark'
        }
    }

    @Input() value = 0;
    
    get type () {
        const key = this.value % 2 
            ? 'odd' as keyof typeof this.types 
            : 'even' as keyof typeof this.types;
        
        return this.types[key];
    }
}