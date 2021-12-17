import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingBadgeComponent } from './ranking-badge.component';

describe('RankingBadgeComponent', () => {
  let component: RankingBadgeComponent;
  let fixture: ComponentFixture<RankingBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
