import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { FundacionModule } from './fundacion/fundacion.module';
import { AdministracionModule } from './administracion/administracion.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FundacionModule,
    AuthModule,
    AdministracionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
