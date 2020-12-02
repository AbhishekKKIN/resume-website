import { Injectable } from '@angular/core';
import { DataService } from '../data.service';


@Injectable()
export class AuthService {
    constructor(private dataService: DataService) { }
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('currentSession');
        if (token) {
            return true;
        }
        return false;
    }

    signIn(data) {
        return this.dataService.post('auth/login/', data);
    }
}