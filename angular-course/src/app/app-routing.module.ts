import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./views/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home',
      description: 'This page is about home'
    },
  },
  {
    path: 'task1',
    loadChildren: () =>  import('./views/task1/task1.module').then(m => m.Task1Module),
    data: {
      title: 'Task 1',
      description: 'This page is about task 1'
    },
  },
  {
    path: 'task2',
    loadChildren: () =>  import('./views/task2/task2.module').then(m => m.Task2Module),
    data: {
      title: 'Task 2',
      description: 'This page is about task 2'
    },
  },
  {
    path: 'task3',
    loadChildren: () =>  import('./views/task3/task3.module').then(m => m.Task3Module),
    data: {
      title: 'Task 3',
      description: 'This page is about task 3'
    },
  },
  {
    path: 'task4',
    loadChildren: () =>  import('./views/task4/task4.module').then(m => m.Task4Module),
    data: {
      title: 'Task 4',
      description: 'This page is about task 4'
    },
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
