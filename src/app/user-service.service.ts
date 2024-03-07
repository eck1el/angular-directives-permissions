import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {

  }

  currentUser:any = "";

  getCurrentUser(){
    let identity = JSON.parse(localStorage.getItem('user') || '{}');
    return identity;
  }
}
