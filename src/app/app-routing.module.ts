import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResumeExamplesComponent } from './pages/resume-examples/resume-examples.component';
import { ResumeTemplateComponent } from './pages/resume-template/resume-template.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuardService } from './service/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },
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
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
