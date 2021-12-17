import {Component, Inject, Input, OnInit} from '@angular/core';
import {AchievementsService} from "../../services/achievements.service";
import { Achievement } from 'src/app/interfaces/Achievement';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-achievement-filter',
  templateUrl: './achievement-filter.component.html',
  styleUrls: ['./achievement-filter.component.scss']
})
export class AchievementFilterComponent implements OnInit {

  constructor(public achievementService: AchievementsService, @Inject(DOCUMENT) private document: Document) {
    this.achievementService = achievementService;
  }
  @Input() achievement = <Achievement>{};
  @Input() isLocked = false;
  @Input() cardSize = 0;

  ngOnInit(): void {

  }

  filterName = ""
  hasSearched = false;
  filterAchievements(filterData: any) {
    this.achievementService.getFilteredData(filterData.value.filterName);
    this.hasSearched = true;
    this.filterName = filterData.value.filterName;
  }

  showSchedule() {
    window.open(`https://seatgeek.com/${this.filterName}-tickets`, "_blank");
  }

}
