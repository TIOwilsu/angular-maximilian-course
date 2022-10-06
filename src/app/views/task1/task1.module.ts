import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';

@NgModule({
  declarations: [Task1Component],
  imports: [SharedModule, Task1RoutingModule]
})

export class Task1Module {}