import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.scss']
})
export class DialogRemoveComponent implements OnInit {

  constructor(public achievementService: AchievementsService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  remove() {
    this.achievementService.deleteUserAchievement(this.achievementService.selectedAchievement);
    this.snackbar.open('Achievement Removed', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass:['red-snackbar'],
    });
  }
}
