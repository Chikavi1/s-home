import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-lights',
  templateUrl: 'lights.html',
})

export class LightsPage {
public isToggle: boolean;
estado:boolean = false;
dato;
cacas;
reley;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afDB: AngularFireDatabase) {
	this.getReley().subscribe(data => {
		if(data == "encendido"){
			this.estado = true;
		}else{
			this.estado = false;
		}
		console.log(data)});

	
  }

public notify(event){
}

public getReley(){
        return this.afDB.object('reley-1').valueChanges();
 }
 
public changeStatus(){
	if(this.estado){
		console.log("enciedo")
		this.afDB.database.ref('reley-1').set("encendido");
	}else{
		console.log("apago")
		this.afDB.database.ref('reley-1').set("apagado");
	}	
 
	}
}
