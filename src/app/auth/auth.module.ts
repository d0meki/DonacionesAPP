import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TextValidatorComponent } from './components/text-validator/text-validator.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterFundacionComponent } from './pages/register-fundacion/register-fundacion.component';
import { ProgressComponent } from './components/progress/progress.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TextValidatorComponent,
    RegisterFundacionComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    RouterModule
  ],
  exports:[
  ],
  providers: [CookieService]

})
export class AuthModule { }
