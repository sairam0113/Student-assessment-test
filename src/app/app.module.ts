import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifymailComponent } from './verifymail/verifymail.component';

import {AuthService} from "./services/auth.service";
import { QuestionsComponent } from './questions/questions.component';
import { ProgressComponent } from './progress/progress.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ta_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ta from '@angular/common/locales/ta';
import {NzLayoutModule, NzMenuModule} from "ng-zorro-antd";
import {MatRadioModule} from '@angular/material/radio'
registerLocaleData(ta);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifymailComponent,
    QuestionsComponent,
    ProgressComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    CustomMaterialModule,
    MatButtonModule,
    MatRadioModule


  ],
  providers: [AuthService, { provide: NZ_I18N, useValue: ta_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
