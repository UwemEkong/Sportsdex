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
  selectedImage = "";
  loggedInUser = <User>{};
  logout() {
    this.authenticated = false;
    this.router.navigateByUrl('/');
  }

 
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
    this.httpClient.get<User>('api/auth/getloggedinuser').subscribe((data) => {
      console.log("User data " + JSON.stringify(data))
      this.loggedInUser = data
      this.selectedImage = this.selectImage();
    })
  }

  selectImage() {
    let images: { team: string, image: string }[] = [
      { "team": "Chicago Bulls", "image": "https://i.pinimg.com/originals/cb/09/9e/cb099ef60af1adcf9227f7736119a290.jpg" },
      { "team": "Chicago Cubs", "image": "https://wallpapers.com/images/high/4k-chicago-cubs-background-warnerwave-xyz-lw3gkh1z75cwi1av.jpg" },
      { "team": "Chicago Blackhawks", "image": "https://i.imgur.com/QG0mBKo.jpg" },
      { "team": "Chicago Bears", "image": "https://wallpapernfl.com/wp-content/uploads/2018/03/HD-Backgrounds-Chicago-Bears.jpg" },
      { "team": "Chicago White Sox", "image": "https://i.redd.it/4svccvc55v651.jpg" }
  ];
    if (this.loggedInUser.favoriteteam == "Chicago Bulls") {
      return images[0].image;
    } else if (this.loggedInUser.favoriteteam == "Chicago Cubs") {
      return images[1].image;
    } else {
      return images[2].image;
    }
  }

  editUser(user:User) {
    this.httpClient.post<User>('api/auth/edituser', user).subscribe(() => {
        this.getLoggedInUser();
    })
  }
}
