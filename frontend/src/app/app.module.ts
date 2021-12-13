import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AchievementFilterComponent } from './components/achievement-filter/achievement-filter.component';
import { AchievementComponent } from './components/achievement/achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AchievementFilterComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
