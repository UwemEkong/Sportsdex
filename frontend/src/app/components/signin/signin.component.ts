import { Component, OnInit } from '@angular/core';
import {AuthServService} from "../../services/auth-serv.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( public authServ: AuthServService) {
    this.authServ = authServ;

  }

  ngOnInit(): void {
  }

  login(userData: any){
    console.log(userData.value.username)
    this.authServ.login({username: userData.value.username, password: userData.value.password});
  }

}
