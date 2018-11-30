import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { Diagnostic } from '@ionic-native/diagnostic';

@IonicPage()
@Component({
  selector: 'page-gps-location',
  templateUrl: 'gps-location.html',
})
export class GpsLocationPage {

  phone: string;
  formGroupPhone: FormGroup;
  latitude: any;
  longitude: any;
  altitude: any
  timestamp: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private geo: Geolocation,
    private sms: SMS,
    private diagnostic: Diagnostic) {

      this.formGroupPhone = formBuilder.group({
        phoneN: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
      });
  }

  ionViewDidLoad() {
  }

  gpsLocation(){
    this.geo.getCurrentPosition().then(pos => {
      this.latitude = pos.coords.latitude,
      this.longitude = pos.coords.longitude,
      this.timestamp = pos.timestamp.toString();
    }).catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.diagnostic.isGpsLocationEnabled().then((enabled) =>{
      if(enabled){
        this.gpsLocation();
      }else{
          this.diagnostic.switchToLocationSettings();
          this.gpsLocation();
      }
    });
  }

  submitForm(){
    this.diagnostic.isGpsLocationEnabled().then((enabled) =>{
      if(enabled){
        this.gpsLocation();
        this.sms.send(this.phone, `Latitud: ${this.latitude}\nLongitud: ${this.longitude}\nTimestamp: ${this.timestamp}`);
        this.phone = '';
      }else{
        this.diagnostic.switchToLocationSettings();
      }
    });  
  }
}
