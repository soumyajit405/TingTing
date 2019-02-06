import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchPinPageModule } from '../pages/launch-pin/launch-pin.module';
import { LaunchScreenPageModule } from '../pages/launch-screen/launch-screen.module';
import { ComponentsModule } from '../components/components.module';
import { OtpScreenPageModule } from '../pages/otp-screen/otp-screen.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageModule } from '../pages/profile/profile.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule,
    LaunchScreenPageModule,
    LaunchPinPageModule,
    OtpScreenPageModule,
    ProfilePageModule
  ],
  exports: [
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
