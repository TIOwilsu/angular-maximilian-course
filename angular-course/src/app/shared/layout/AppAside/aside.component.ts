import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { Button } from 'app/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public buttons: Array<Button> = [];
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.buttons = this.router.config.filter(({ path }) => path).map(route => ({
      ...route,
      class: 'w-100 rounded-0 mb-2',
      status: 'secondary',
      text: route.data?.title,
      routerLink: route.path,
      routerLinkActive: 'active'
    }));
  }
}
