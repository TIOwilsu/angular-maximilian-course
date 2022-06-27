import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() highlight:boolean = false;
  @Input() size:string = '';
  @Input() href:string = '';

  get classProps() {
    return {
      'highlight-card': this.highlight,
      [`card-${this.size}`]: this.size
    }
  };
}

