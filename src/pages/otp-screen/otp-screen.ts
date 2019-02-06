import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchPinPage } from '../launch-pin/launch-pin';
import { ApiService } from '../../services/ApiService';

/**
 * Generated class for the OtpScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-screen',
  templateUrl: 'otp-screen.html',
  providers: [ApiService]
})
export class OtpScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService: ApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpScreenPage');
  } 
  eventCapture($event){
    console.log($event);
    this.apiService.post('/authenticateOTP' , { phone :  this.navParams.get('mobNum') , otp : $event}).subscribe(data=>{
      if(data && data.response == 'OTP Matched.'){
        swal(data.response,"","success");
        this.navCtrl.push(LaunchPinPage, { isNewPin : true ,  mobNum : this.navParams.get('mobNum') });
      }
    });
    
  }

}
