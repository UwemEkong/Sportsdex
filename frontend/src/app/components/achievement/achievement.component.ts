import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  @Input() achievement = <Achievement>{};
  @Input() isLocked = false;
  @Input() cardSize = 0;

  ngOnInit(): void {
  }

  unlockAchievement() {
    this.achievementService.unlockAchievement(this.achievement);
  }

  deleteUserAchievement() {
    this.achievementService.deleteUserAchievement(this.achievement);
  }
}
