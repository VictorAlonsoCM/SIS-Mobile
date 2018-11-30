import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpsLocationPage } from './gps-location';

@NgModule({
  declarations: [
    GpsLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GpsLocationPage),
  ],
})
export class GpsLocationPageModule {}
