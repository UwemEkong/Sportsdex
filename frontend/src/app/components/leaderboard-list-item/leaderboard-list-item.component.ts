import {Component, Input, OnInit} from '@angular/core';
import {userRating} from "../../interfaces/userRating";
import {AchievementsService} from "../../services/achievements.service";

@Component({
  selector: 'app-leaderboard-list-item',
  templateUrl: './leaderboard-list-item.component.html',
  styleUrls: ['./leaderboard-list-item.component.scss']
})
export class LeaderboardListItemComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  @Input() userRating = <userRating>{}
  ngOnInit(): void {
    console.log(this.userRating.username);
  }

}
