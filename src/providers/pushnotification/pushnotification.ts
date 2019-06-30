import { Injectable } from '@angular/core';

import { OneSignal } from '@ionic-native/OneSignal';
import { Platform } from 'ionic-angular';
@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
  			public platform: Platform) {
  	
    console.log('Hello PushnotificationProvider Provider');
  }
  init_notifications(){
  	if(this.platform.is("cordova")){

  	this.oneSignal.startInit('1afea86b-9320-41db-b6ab-c30a7e44b71a', '894650718779');

	this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

	this.oneSignal.handleNotificationReceived().subscribe(() => {
	 // do something when notification is received
	});

	this.oneSignal.handleNotificationOpened().subscribe(() => {
	  // do something when a notification is opened
	});

	this.oneSignal.endInit();
}else{
	console.log("Estas en chrome")
  }
}
}
