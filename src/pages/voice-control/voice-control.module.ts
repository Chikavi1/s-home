import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceControlPage } from './voice-control';

@NgModule({
  declarations: [
    VoiceControlPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceControlPage),
  ],
})
export class VoiceControlPageModule {}
