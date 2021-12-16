import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'app-achievement-list-item',
  templateUrl: './achievement-list-item.component.html',
  styleUrls: ['./achievement-list-item.component.scss']
})
export class AchievementListItemComponent implements OnInit {

  constructor(public achievementService: AchievementsService) { }

  @Input() achievement = <Achievement>{};
  ngOnInit(): void {
  }

}
