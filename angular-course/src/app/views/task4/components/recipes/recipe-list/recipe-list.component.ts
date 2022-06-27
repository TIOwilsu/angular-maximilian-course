import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'A test Recipe', 
      'This is  simply a test', 
      'https://image.shutterstock.com/image-photo/assortment-aromatic-organic-spices-herbs-600w-1892433058.jpg'
    ),
    new Recipe(
      'A test Recipe', 
      'This is  simply a test', 
      'https://image.shutterstock.com/image-photo/assortment-aromatic-organic-spices-herbs-600w-1892433058.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
