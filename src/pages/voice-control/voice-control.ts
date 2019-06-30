import { Component } from '@angular/core';
import {NavController, NavParams,Platform  } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-voice-control',
  templateUrl: 'voice-control.html',
})
export class VoiceControlPage {
  message:string;
  constructor(public plt: Platform,
  			  public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private speechRecognition: SpeechRecognition,
  			  private toastCtrl: ToastController,
  			  private Api: ApiProvider
  			  ) {
  }

  ionViewDidLoad() {
  	if(this.plt.is('cordova')){
    	this.getPermission();
  	}else{
  		this.presentToast("Estamos en el navegador.");
  	}
  }

  startListening(){
    let options = {
      language: "es-ES",//fijamos el lenguage
      matches: 1,//Nos devuelve la primera opción de lo que ha escuchado
      //si ponemos otra cantidad, nos dará una variante de la palabra/frase que le hemos dicho
    }
    this.speechRecognition.startListening(options).subscribe(matches=>{
      this.message = matches[0]; //Guarda la primera frase que ha interpretado en nuestra variable
      if(this.message == "enciende la luz de la sala"){
      	this.presentToast("Ok,encendiendo la luz de la sala.");
      }
      if(this.message == "abre la puerta"){
      	this.presentToast("ok,Abriendo la puerta");
      }
      if(this.message == "dame la temperatura"){
      	this.Api.getHumedity().subscribe(data => {
  			this.presentToast("Ok,la temperatura es "+ data);
  		});
    }
    })
  }

  getPermission(){
    //comprueba que la aplicación tiene permiso, de no ser así nos la pide
    this.speechRecognition.hasPermission().
      then((hasPermission:boolean)=>{
        if(!hasPermission){
          this.speechRecognition.requestPermission();
        }
      })
  }
presentToast(mensaje) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

}