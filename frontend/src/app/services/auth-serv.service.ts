import { Injectable } from '@angular/core';
import {User} from "../interfaces/User";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticated = false;
  error = "";
  loggedInUser = <User>{};
  logout() {
    this.authenticated = false;
    this.router.navigateByUrl('/');
  }

  friendList:Array<string> | undefined;
  login(user:User) {
    this.httpClient.get<User>(`api/auth/login/${user.username}/${user.password}`).subscribe((data: User) => {
      console.log(data)
      if (data.username) {
        this.authenticated = true;
        console.log("User data " + JSON.stringify(data))
        this.loggedInUser = data
        this.router.navigateByUrl('/homepage');
      } else {
        this.authenticated = false;
      }
    })
  }

  register(user:User) {
    console.log('REGISTERING USER: ' + JSON.stringify(user))

    this.httpClient.post<User>('api/auth/register', user).subscribe(() => {
      this.router.navigateByUrl('');
    })
  }

  getLoggedInUser() {
    return this.httpClient.get<User>('api/auth/getloggedinuser')
  }
}
