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
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { AchievementListItemComponent } from './components/achievement-list-item/achievement-list-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { DialogRemoveComponent } from './components/dialog-remove/dialog-remove.component';
import {SignupComponent} from "./components/signup/signup.component";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    AchievementsComponent,
    LeaderboardComponent,
    SigninComponent,
    HomepageComponent,
    WelcomeComponent,
    AchievementFilterComponent,
    AchievementComponent,
    AchievementListComponent,
    WelcomeComponent,
    AchievementListItemComponent,
    DialogExampleComponent,
    CustomSnackbarComponent,
    DialogRemoveComponent,
    SignupComponent,
    InfoDialogComponent,
    SettingsComponent
  ],
  entryComponents:[DialogExampleComponent, CustomSnackbarComponent],
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
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
