import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-filter',
  templateUrl: './achievement-filter.component.html',
  styleUrls: ['./achievement-filter.component.scss']
})
export class AchievementFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedTeam = "Chicago Bulls";
  filterAchievements(filterData: any) {

  }

}
