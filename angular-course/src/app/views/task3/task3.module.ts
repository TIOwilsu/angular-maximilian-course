import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { Task3Component } from './task3.component';
import { Task3RoutingModule } from './task3-routing.module';

@NgModule({
  declarations: [Task3Component],
  imports: [SharedModule, Task3RoutingModule]
})

export class Task3Module {}