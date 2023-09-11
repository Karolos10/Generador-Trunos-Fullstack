import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TurnosPageComponent } from './auth/pages/dashboard/turnos-page/turnos-page.component';
import { LoginPageComponent } from './auth/pages/login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnosPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
