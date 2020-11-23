import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.sass']
})
export class CoverLetterComponent implements OnInit {
  coverletterList;
  faqsList;
  internet = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCoverletterList();
    this.getFaqsList('cover-letter');
  }

  getCoverletterList() {
    // this.resumeTemplateList = [
    //   { "image": "/uploads/base-templates-images/image-1604040601312-8909935.jpg", "description": "no description available", "_id": "5f9bb799a719b211b820f255", "title": "Basic", "template_name": "Basic", "template_type": "resume" },
    //   { "image": "https://printcv.s3.us-east-2.amazonaws.com/Template1-min.png", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabda1daca0b69fbbf55c47", "title": "Unnammed 1", "template_name": "Template1", "template_type": "resume" },
    //   { "image": "https://printcv.s3.us-east-2.amazonaws.com/Template2-min.png", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabdb07aca0b69fbbf55c48", "title": "Unnammed 2", "template_type": "resume", "template_name": "Template2" },
    //   { "image": "https://printcv.s3.us-east-2.amazonaws.com/Template3-min.png", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabdb16aca0b69fbbf55c49", "title": "Unnammed 3", "template_type": "resume", "template_name": "Template3" },
    //   { "image": "https://printcv.s3.us-east-2.amazonaws.com/Template4-min.png", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabdb20aca0b69fbbf55c4a", "title": "Unnammed 4", "template_type": "resume", "template_name": "Template4" },
    //   { "image": "https://printcv.s3.us-east-2.amazonaws.com/Template5-min.png", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabdb39aca0b69fbbf55c4b", "title": "Unnammed 5", "template_type": "resume", "template_name": "Template5" },
    //   { "image": "/uploads/base-templates-images/image-1604040601312-8909935.jpg", "description": "This is the Dummy Short Description of Resume Template", "_id": "5fabdb43aca0b69fbbf55c4c", "title": "Unnammed 6", "template_type": "resume" }
    // ]
    this.dataService.getCoverLetters().subscribe((data: any) => {
      const items = data.data.docs;
      this.coverletterList = items;
    }, (error) => {
      console.log(error.message)
    });
  }

  getFaqsList(param) {
    // this.faqsList = [{"_id":"5faa9e44232eb52f5c48d140","question":"How does Print CV resume template builder work?","answer":"Print CV resume builder is the world's simplest resume template builder.  -Just choose your career level.  -Select a resume builder template.  - Get resume writing suggestions.  - Edit and download","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabdd60aca0b69fbbf55c5c","question":"What is Print CV's one of its kind resume writing suggestions?","answer":"Print CV resume suggestions will help you script your success story. Based on the keywords you enter Print CV's smart resume writing suggestion tool will build your resume.  Even very experienced candidates at times struggle to articulate their story and that's where Print CV resume writing suggestion tool comes to their rescue. ","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabdd7daca0b69fbbf55c5d","question":"Can I give it a try before making a purchase?","answer":"Yes!  You can try it for Free. We have transparent and flat pricing. No hidden costs. You can download your perfect CV with Print Cv resume builder  for 5 USD only.","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabddb9aca0b69fbbf55c5e","question":"Are Print CV resume templates ATS friendly?","answer":"Yes! We are ATS friendly. You need to use the right keywords to get  your resume found by the recruiter. Please read this blog for more information. ","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabdf85aca0b69fbbf55c5f","question":"What are payment methods?","answer":"You can pay us via PayPal, Visa MasterCard.","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabdfa2aca0b69fbbf55c60","question":"Can Print CV be used by candidates worldwide? or you are country specific?","answer":"Print CV is created by the industry experts. It is by the industry for the industry application. We speak with industry experts day in and day out. We are truly a global resume writing software and we are helping candidates from 100+ countries.","type":"resume","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabf94eaca0b69fbbf55c61","question":"What is the length of cover letter? ","answer":"Generally your cover letter is 200-400 words long. Don’t make it too short or too long. ","type":"cover-letter","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabf991aca0b69fbbf55c62","question":"Is cover letter mandatory?","answer":"Around 78% recruiters we have interviewed have said that we simply scratch the application off which does not have a cover letter. If we have urgent opening or in some cases bottlenecks then we may consider an application without a cover letter however such chances are slick.","type":"cover-letter","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabf9afaca0b69fbbf55c63","question":"I have been invited by the company; do I still need a cover letter?","answer":"Yes, still you need a cover letter. Remember you are not the only one the company has invited so it is better to carry your cover sheet with you at the time of interview.","type":"cover-letter","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabf9d4aca0b69fbbf55c64","question":"Can I simply use same cover letter everywhere?","answer":"It will hamper your chances by 80%. Believe us! It is a rookie mistake while making a cover letter. If you wish to land in perfect job then make sure you don’t mass email or have same cover letter everywhere. It is a big turn off for employers.","type":"cover-letter","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0},{"_id":"5fabfa47aca0b69fbbf55c65","question":"I am a student and I need part time job. Do I need a cover letter?","answer":"Student cover letters are easy to make. Please note, making a cover letter is good professional habit. It is good if you learn these skills at the start of your career. Kick-start your career.","type":"cover-letter","createdAt":"2020-11-10T14:05:56.790Z","updatedAt":"2020-11-10T14:31:32.107Z","__v":0}]
    this.dataService.getFaqs(param).subscribe((data: any) => {
      const items = data.data;
      this.faqsList = items;
    }, error => {
      this.internet = false;
    });
  }


}
