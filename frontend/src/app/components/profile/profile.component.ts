import { Component, OnInit } from '@angular/core';
import {AuthServService} from "../../services/auth-serv.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(public authServivce: AuthServService) {
    this.authServivce = authServivce;
  }

  ngOnInit(): void {
  }

}
