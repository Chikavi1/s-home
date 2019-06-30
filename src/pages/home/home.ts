import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { LightsPage } from  '../lights/lights';
import {IrrigationPage} from '../irrigation/irrigation';
import { VoiceControlPage } from '../voice-control/voice-control';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
data = [];
items =  {};
reley;
temperatura;
humedad;
  constructor(public navCtrl: NavController,public AP: ApiProvider,private afDB: AngularFireDatabase) {
  this.getFruit().subscribe(data => {this.reley = data;});
  console.log(this.reley);
  this.getTemperature().subscribe(data => {this.temperatura = data;});
  this.getHumedity().subscribe(data => {this.humedad = data;});
  }
  
  public getFruit(){
        return this.afDB.object('user-1/releys/reley1').valueChanges();
 }

public getTemperature(){
        return this.afDB.object('user-1/temperatura').valueChanges();
 }

public getHumedity(){
  return this.afDB.object('user-1/humedad').valueChanges();
}
public irLuces(){
  this.navCtrl.push(LightsPage);
}
public irRiego(){
  this.navCtrl.push(IrrigationPage);
}
public irVoz(){
  this.navCtrl.push(VoiceControlPage);
}

}