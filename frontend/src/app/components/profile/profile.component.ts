import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsService } from 'src/app/services/achievements.service';
import {AuthServService} from "../../services/auth-serv.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authServivce: AuthServService, public achievementService: AchievementsService,private router: Router) { }

  ngOnInit(): void {
    this.achievementService.getUnlockedAchievements();
    this.achievementService.getLockedAchievements();
    this.authServivce.getLoggedInUser();

  }

  goToSettings() {
    this.router.navigateByUrl("/settings");
  }

}
