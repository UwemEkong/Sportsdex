import {Component, Input, OnInit} from '@angular/core';
import {AchievementsService} from "../../services/achievements.service";
import { Achievement } from 'src/app/interfaces/Achievement';

@Component({
  selector: 'app-achievement-filter',
  templateUrl: './achievement-filter.component.html',
  styleUrls: ['./achievement-filter.component.scss']
})
export class AchievementFilterComponent implements OnInit {

  constructor(public achievementService: AchievementsService) {
    this.achievementService = achievementService;
  }
  @Input() achievement = <Achievement>{};
  @Input() isLocked = false;
  @Input() cardSize = 0;

  ngOnInit(): void {

  }

  filterAchievements(filterData: any) {
    this.achievementService.getFilteredData(filterData.value.filterName);
  }

}
