import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { Task2Component } from './task2.component';
import { Task2RoutingModule } from './task2-routing.module';

@NgModule({
  declarations: [Task2Component],
  imports: [SharedModule, Task2RoutingModule]
})

export class Task2Module {}