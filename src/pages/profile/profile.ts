import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/ApiService';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers : [ApiService]
})
export class ProfilePage {
  profileForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder,private apiService:ApiService) {
      this.profileForm = this.fb.group({
        name : '',
        dob : '',
        city : '',
        email : '',
        occupation : '',
        phone : this.navParams.get('mob')
      })
  }

  ionViewDidLoad() {
     
  }

  reset(){
     
  }

  save(){
    
    http://autoiinnovations.com/TingTingAPI/rest/checkMobileExistence
     this.apiService.post('/checkMobileExistence' , {
       phone : this.profileForm.value.phone,
       city : this.profileForm.value.city,
       email : this.profileForm.value.email,
       name : this.profileForm.value.name,
       occupation : this.profileForm.value.occupation,
      // dob : this.profileForm.value.dob
     }).subscribe(data=>{
       alert(data.response);
      this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
     });
  }
 


}
