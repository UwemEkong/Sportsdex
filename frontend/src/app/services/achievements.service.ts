import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Achievement} from "../interfaces/Achievement";

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private httpClient: HttpClient, private router: Router) { }


lockedAchievements = <Achievement[]>[];
unlockedAchievements = <Achievement[]>[];

  getLockedAchievements() {
    this.httpClient.get<Achievement[]>('api/achievement/getLockedAchievements').subscribe(data => {
      console.log(data);
      this.lockedAchievements = data;
    })
  }

  getUnlockedAchievements() {
    this.httpClient.get<Achievement[]>('api/achievement/getUnlockedAchievements').subscribe(data => {
      console.log(data);
      this.unlockedAchievements = data;
      this.getLockedAchievements();
    })
  }

  unlockAchievement(achievement:Achievement) {
    this.httpClient.get(`api/achievement/unlockAchievement/${achievement.id}`).subscribe(data => {
      console.log(data);
      this.getLockedAchievements();
      this.getUnlockedAchievements();
    })
  }

  deleteUserAchievement(achievement: Achievement) {
    this.httpClient.delete(`api/achievement/deleteUserAchievement/${achievement.id}`).subscribe(data => {
      console.log(data);
      this.getUnlockedAchievements();
    })
  }
}
