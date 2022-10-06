import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Task6Component } from './task6.component';

const routes: Routes = [
  { 
    path: '', 
    component: Task6Component 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Task6RoutingModule {}

