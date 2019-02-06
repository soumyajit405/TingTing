import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiService } from '../../services/ApiService';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the LaunchPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-pin',
  templateUrl: 'launch-pin.html',
  providers: [ApiService]
})
export class LaunchPinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService: ApiService) {
    console.log(this.navCtrl)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPinPage');
  }
  eventCapture(event) {
    if(this.navParams.get('isExistingUser')){
      //validate pin
      this.apiService.post('/authenticatePIN' , { phone :  this.navParams.get('mobNum') , pin : event}).subscribe(data=>{
        if(data && data.response == 'PIN Validated.'){
          swal(data.response,"","success");
          this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
        }
      });
    }else{
      this.apiService.post('/insertPin' , { phone :  this.navParams.get('mobNum') , pin : event}).subscribe(data=>{
        this.navCtrl.push(ProfilePage , { mob : this.navParams.get('mobNum')});
      });
    }
    
    
  }
   
  

}
