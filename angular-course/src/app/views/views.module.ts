import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { Task3Module } from './task3/task3.module';
import { Task4Module } from './task4/task4.module';

@NgModule({
  imports: [
    HomeModule, 
    Task1Module, 
    Task2Module, 
    Task3Module,
    Task4Module
  ],
})

export class ViewsModule {}
