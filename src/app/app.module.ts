import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { Diagnostic } from '@ionic-native/diagnostic';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GpsLocationPage } from '../pages/gps-location/gps-location';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GpsLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GpsLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SMS,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
