import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { RegistrationFormComponent } from './core/registration-form/registration-form.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { NavComponent } from './header/nav/nav.component';
import { SortingBarComponent } from './header/sorting-bar/sorting-bar.component';
import { PodcastCardsListComponent } from './body/podcast-cards-list/podcast-cards-list.component';
import { PodcastCardFormComponent } from './body/podcast-card-form/podcast-card-form.component';
import { PodcastCardPageComponent } from './body/podcast-card-page/podcast-card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    NotFoundPageComponent,
    NavComponent,
    SortingBarComponent,
    PodcastCardsListComponent,
    PodcastCardFormComponent,
    PodcastCardPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
