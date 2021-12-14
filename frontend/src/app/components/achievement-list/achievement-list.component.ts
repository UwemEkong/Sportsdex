import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  ngOnInit(): void {
    this.achievementService.getLockedAchievements();
  }

}
