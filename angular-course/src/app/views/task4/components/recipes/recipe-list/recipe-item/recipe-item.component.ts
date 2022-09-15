import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent {
  
  constructor() { }

  @Input() recipe:Recipe = { 
    name: '', 
    description: '', 
    imagePath: '' 
  };

  @Output() recipeSelected: EventEmitter<void> = new EventEmitter<void>();

  onSelect(){
    this.recipeSelected.emit();
  }


}
