import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';
import { AchievementsService } from 'src/app/services/achievements.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})

export class AchievementComponent implements OnInit {
  constructor(public achievementService: AchievementsService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  @Input() achievement = <Achievement>{};
  @Input() isLocked = false;
  @Input() cardSize = 0;
  ngOnInit(): void {
  }

  unlockAchievement() {
    this.confirmUnlock();
  }

 

  confirmUnlock() {
    this.achievementService.selectedAchievement = this.achievement;
    let dialogRef = this.dialog.open(DialogExampleComponent);
  }

  

  deleteUserAchievement() {
    this.achievementService.selectedAchievement = this.achievement;
    let dialogRef = this.dialog.open(DialogRemoveComponent);
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
