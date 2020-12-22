import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  APIEndpoint = '';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.baseUrl;
  }

  getResumeTemplate() {
    return this.http.get(this.APIEndpoint + 'base-templates');
  }

  getTemplateById(param) {
    return this.http.get(this.APIEndpoint + 'resume-variant?base_id=' + param)
  }

  getCoverLetters() {
    return this.http.get(this.APIEndpoint + 'base-cover-letters');
  }

  getFaqs(param) {
    return this.http.get(this.APIEndpoint + 'faq/' + param);
  }

  registration(param) {
    return this.http.post(this.APIEndpoint + 'user/local/', param);
  }

  post(url, data) {
    return this.http.post(this.APIEndpoint + url, data, {
      headers: this.headers
    });
  }

}
