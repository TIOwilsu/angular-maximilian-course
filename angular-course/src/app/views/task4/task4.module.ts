import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { Task4Component } from './task4.component';
import { Task4RoutingModule } from './task4-routing.module';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [Task4Component, ShoppingListComponent, ShoppingEditComponent, RecipesComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent],
  imports: [SharedModule, Task4RoutingModule]
})

export class Task4Module {}