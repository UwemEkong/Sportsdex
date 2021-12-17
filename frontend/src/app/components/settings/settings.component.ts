import { Component, OnInit } from '@angular/core';
import { AuthServService } from 'src/app/services/auth-serv.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public authServivce: AuthServService) { }

  ngOnInit(): void {
    this.authServivce.getLoggedInUser();
  }

  editUser(userData: any) {
    this.authServivce.editUser({firstname: userData.value.firstname, lastname: userData.value.lastname, email: userData.value.email, favoriteteam: userData.value.favoriteteam, username: userData.value.username, password: userData.value.password});
  }
}
