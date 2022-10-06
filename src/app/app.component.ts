import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { PageData } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'angular-course';

  pageData: PageData = {
    title: '',
    description: '',
  };
  
  constructor(private route:Router){}
    
  public ngOnInit(): void {
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const { title, description } =  data.state.root.firstChild?.data!;
        this.pageData = { title, description };
       }
    })
  }
}
