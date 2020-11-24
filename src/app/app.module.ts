import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeTemplateComponent } from './pages/resume-template/resume-template.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResumeExamplesComponent } from './pages/resume-examples/resume-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ResumeTemplateComponent,
    CoverLetterComponent,
    FooterComponent,
    ResumeExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
