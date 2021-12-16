import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AchievementsService } from 'src/app/services/achievements.service';
import { CustomSnackbarService } from 'src/app/services/custom-snackbar.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  constructor(public achievementService: AchievementsService, private snackService: CustomSnackbarService) { }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/xbox360.mp3";
    audio.load();
    audio.play();
  }
  
  showSnackBar() {
    this.snackService.openSnackBar('Achievement Unlocked!');
    this.playAudio();
  }

  unlock() {
    this.achievementService.unlockAchievement(this.achievementService.selectedAchievement);
    this.showSnackBar();
    this.playAudio();
  }

  ngOnInit(): void {
  }

}
