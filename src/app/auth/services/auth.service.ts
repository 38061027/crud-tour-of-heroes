import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/credential.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)

  isLoggedIn$ = this.loggedIn.asObservable()


  constructor(private router: Router) { }

  login(credential: Credentials):void{
    localStorage.setItem('token', credential.password);
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard'])
  }


  logout():void{
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login'])
}


}
