import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LightsPage } from '../pages/lights/lights';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

import { OneSignal } from '@ionic-native/OneSignal';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';
export const firebaseConfig = {
  apiKey: "AIzaSyCVxIXgGMDH7vWghDriQViefYEpR-7usZk",
    authDomain: "domotica-2020.firebaseapp.com",
    databaseURL: "https://domotica-2020.firebaseio.com",
    projectId: "domotica-2020",
    storageBucket: "domotica-2020.appspot.com",
    messagingSenderId: "894650718779",
    appId: "1:894650718779:web:1420d7ca732860ca"

};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LightsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LightsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    ApiProvider,
    PushnotificationProvider
  ]
})
export class AppModule {}
