import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  title = 'angular-course';

  constructor(private router: Router){}

  ngOnInit() {
    console.log(this.router.config);
  }
}
