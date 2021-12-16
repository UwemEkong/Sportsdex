import { getRtlScrollAxisType } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Achievement } from '../interfaces/Achievement';
import { AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  ngOnInit(): void {
    this.achievement = this.achievementService.selectedAchievement;
    this.getRarity();
  }
  achievement = <Achievement>{};
  rarity = ""
  badge = "";

  getRarity() {
    if (this.achievement.points == '1') {
      this.rarity = "Bronze";
      this.badge = "https://bestanimations.com/media/awards/1115051502trophy-bronze-animated-gif.gif";
    } else if (this.achievement.points == '5') {
      this.rarity = "Silver";
      this.badge="https://bestanimations.com/media/awards/1196093887trophy-silver-animated-gif.gif";
    } else {
      this.rarity = "Gold";
      this.badge = "https://bestanimations.com/media/awards/885959548trophy-gold-animated-gif.gif"
    }
  }

  achievementPointColor(points: String | undefined) {
    if(points == '10') {
      points = 'gold';
    }

    if(points == '5') {
      points = 'silver';
    }

    if(points == '1') {
      points = 'bronze';
    }
    return points;
  }

}
