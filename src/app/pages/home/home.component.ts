import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('10s')
      ]),
      transition('closed => open', [
        animate('10.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isOpen = true;

  customOptions: OwlOptions = {
    loop: true,
    items: 5,
    center: true
  }

  worksOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    dotsData: true,
    center: true
  }

  constructor() { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }




}
