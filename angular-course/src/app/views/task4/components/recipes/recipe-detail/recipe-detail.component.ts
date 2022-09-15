import { Component, Input, OnInit } from '@angular/core';
import { Recipe, recipeData } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = recipeData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
