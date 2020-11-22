import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.sass']
})
export class ResumeTemplateComponent implements OnInit {
  resumeTemplateList;
  customOptions: OwlOptions = {
    loop: true,
    nav: true
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getResumeTemplateList();
  }

  getResumeTemplateList() {
    this.dataService.getResumeTemplate().subscribe((data: any) => {
      const items = data.data.docs;
      this.resumeTemplateList = items;
    }, (error) => {
      console.log(error.message)
    });
  }

}
