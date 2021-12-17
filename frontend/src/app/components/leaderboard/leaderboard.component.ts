import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {AchievementsService} from "../../services/achievements.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(public achievementServ: AchievementsService) {
    this.achievementServ = achievementServ;
  }

  ngOnInit(): void {
    this.achievementServ.getLeaderbooard();
  }





}
