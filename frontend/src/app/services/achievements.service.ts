import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Achievement} from "../interfaces/Achievement";
import {User} from "../interfaces/User";
import {userRating} from "../interfaces/userRating"

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private httpClient: HttpClient, private router: Router) { }
numUnlocked: userRating[] | undefined;
leaderboard = <User[]>[];
lockedAchievements = <Achievement[]>[];
  lockedFilteredAchivements = <Achievement[]>[];
unlockedAchievements = <Achievement[]>[];
selectedAchievement = <Achievement>{};
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
      this.getNumAch();
    })
  }

  deleteUserAchievement(achievement: Achievement) {
    this.httpClient.delete(`api/achievement/deleteUserAchievement/${achievement.id}`).subscribe(data => {
      console.log(data);
      this.getUnlockedAchievements();
    })
  }

  getFilteredData(team: String) {
    this.httpClient.get<Achievement[]>(`api/achievement/getLockedFilteredAchievements/${team}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.lockedAchievements = data;
    })
  }

  getLeaderbooard() {
      this.httpClient.get<User[]>('api/achievement/getLeaderboard').subscribe(data => {
        this.leaderboard = data;
        console.log(data);
        return this.leaderboard;
      })


  }

  getNumAch() {
    this.httpClient.get<userRating[]>(`api/achievement/getUserAch/`).subscribe(data => {
      console.log(data)
       this.numUnlocked = data;
    })
  }
}
