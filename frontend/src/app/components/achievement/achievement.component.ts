import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/Achievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  @Input() achievement = <Achievement>{};
  
  ngOnInit(): void {
  }

}
