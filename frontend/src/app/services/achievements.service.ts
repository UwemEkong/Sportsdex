import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Achievement} from "../interfaces/Achievement";

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private HttpClient: HttpClient, private router: Router) { }

  getAllAchievements() {
    this.HttpClient.get('api/achievements/getAchievements').subscribe(data => {
      return data;
    })
  }
}
