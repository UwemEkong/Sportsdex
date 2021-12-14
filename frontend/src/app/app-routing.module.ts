import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AchievementsComponent} from "./components/achievements/achievements.component";
import {LeaderboardComponent} from "./components/leaderboard/leaderboard.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'achievements', component: AchievementsComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
