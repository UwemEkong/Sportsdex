import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';
import { AchievementsService } from 'src/app/services/achievements.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(public achievementService: AchievementsService, private _snackBar: MatSnackBar) { }
  durationInSeconds = 5;
  @Input() achievement = <Achievement>{};
  @Input() isLocked = false;
  @Input() cardSize = 0;

  ngOnInit(): void {
  }

  unlockAchievement() {
    this.achievementService.unlockAchievement(this.achievement);
    this.playAudio();
    this._snackBar.open("Achievement Unlocked","", {
      duration: 1000,
    });
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/xbox360.mp3";
    audio.load();
    audio.play();
  }

  deleteUserAchievement() {
    this.achievementService.deleteUserAchievement(this.achievement);
  }
}
