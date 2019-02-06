import { Component, Inject, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/ApiService';
import { OtpScreenPage } from '../otp-screen/otp-screen';
import { LaunchPinPage } from '../launch-pin/launch-pin';
import swal from 'sweetalert';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the LaunchScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-screen',
  templateUrl: 'launch-screen.html',
  providers: [ApiService]

})
export class LaunchScreenPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,  public apiService: ApiService
   // @Inject(forwardRef(() => ApiService)) public apiService: ApiService
     ) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchScreenPage');
  } 
  eventCapture($event){ 
    console.log($event)
    this.checkMobileNumber($event);
  }
  checkMobileNumber($event){
  //  this.navCtrl.setRoot(OtpScreenPage, {}, {animate: true, direction: 'forward'});
   let phone = $event;//'9502165016';
  //this.navCtrl.push(ProfilePage , { mobNum : phone});

     this.apiService.post('/checkMobileExistence' , { phone : phone }).subscribe(data=>{
      if(data && data.response == 'OTP Sent Successfully.'){
        swal(data.response,"","success");
        this.navCtrl.push(OtpScreenPage ,{ mobNum : phone });
        //this.navCtrl.setRoot(OtpScreenPage, {}, {animate: true, direction: 'forward'});
      }else{
        swal(data.response || '', "Click ok button to proceed to PIN", "success");
        this.navCtrl.push(LaunchPinPage , { mobNum : phone , isExistingUser : true });
        //this.navCtrl.setRoot(LaunchPinPage, {}, {animate: true, direction: 'forward'});
      }
    });
  }

}
