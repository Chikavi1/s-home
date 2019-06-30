	import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IrrigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irrigation',
  templateUrl: 'irrigation.html',
})
export class IrrigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrrigationPage');
  }
  public changeStatus(){
	if(this.estado){
		console.log("enciedo")
		//this.afDB.database.ref('reley-1').set("encendido");
	}else{
		console.log("apago")
		//this.afDB.database.ref('reley-1').set("apagado");
	}	
 
	}

}
