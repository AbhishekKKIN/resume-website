import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
