import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResumeExamplesComponent } from './pages/resume-examples/resume-examples.component';
import { ResumeTemplateComponent } from './pages/resume-template/resume-template.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'resume-template',
    component: ResumeTemplateComponent
  },
  {
    path: 'cover-letter',
    component: CoverLetterComponent
  },
  {
    path: 'resume-examples',
    component: ResumeExamplesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: '',
    redirectTo: 'resume-template',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'resume-template' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
