import {Component, Input, OnInit} from '@angular/core';
import {userRating} from "../../interfaces/userRating";
import {AchievementsService} from "../../services/achievements.service";

@Component({
  selector: 'app-ranking-badge',
  templateUrl: './ranking-badge.component.html',
  styleUrls: ['./ranking-badge.component.scss']
})
export class RankingBadgeComponent implements OnInit {

  constructor(public achievementServ: AchievementsService) { }

  @Input() userRating = <userRating>{}
  ngOnInit(): void {
  }

}
