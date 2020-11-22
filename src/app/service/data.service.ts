import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  APIEndpoint = '';

  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.baseUrl;
  }

getResumeTemplate(){
  return this.http.get(this.APIEndpoint + 'base-templates');
}

}
