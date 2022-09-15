import { Component, EventEmitter, Output, } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [];

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  onAddRecipe(){
    const recipeIndex: number = this.recipes.length + 1;
    const recipe: Recipe = new Recipe(
      `A test Recipe ${recipeIndex}`, 
      'This is  simply a test', 
      'https://image.shutterstock.com/image-photo/assortment-aromatic-organic-spices-herbs-600w-1892433058.jpg'
    );
    this.recipes.push(recipe);
  }
}
