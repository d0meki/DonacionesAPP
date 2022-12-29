import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FundacionModule } from './fundacion/fundacion.module';
import { AuthModule } from './auth/auth.module';
import { AdministracionModule } from './administracion/administracion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FundacionModule,
    AuthModule,
    AdministracionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
