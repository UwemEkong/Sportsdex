import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementFilterComponent } from './components/achievement-filter/achievement-filter.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import {SigninComponent} from "./components/signin/signin.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './components/homepage/homepage.component';
import { AchievementListComponent } from './components/achievement-list/achievement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    AchievementsComponent,
    LeaderboardComponent,
    SigninComponent,
    HomepageComponent,
    AchievementFilterComponent,
    AchievementComponent,
    AchievementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
