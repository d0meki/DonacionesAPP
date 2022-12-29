import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarClientComponent } from './components/side-bar-client/side-bar-client.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TextValidatorInputComponent } from './components/text-validator-input/text-validator-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomePageComponent,
    SideBarClientComponent,
    ProfilePageComponent,
    HistoryPageComponent,
    ProfileComponent,
    TextValidatorInputComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DonacionesModule { }
