import { Component, OnInit } from '@angular/core';
import {AuthServService} from "../../services/auth-serv.service";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  constructor(public authServ: AuthServService) {
    this.authServ = authServ;
  }

  ngOnInit(): void {
  }

  register(userData: any) {
    this.authServ.register({firstname: userData.value.firstname, lastname: userData.value.lastname, email: userData.value.email, username: userData.value.username, password: userData.value.password});
  }
}
