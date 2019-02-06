import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMyProfilePage } from './user-my-profile';

@NgModule({
  declarations: [
    UserMyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserMyProfilePage),
  ],
})
export class UserMyProfilePageModule {}
