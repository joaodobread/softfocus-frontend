import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: './',
    },
    {
      title: 'Add Loss Communication',
      icon: 'plus-outline',
      link: 'add-loss-communication',
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
      link: '/logout',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
