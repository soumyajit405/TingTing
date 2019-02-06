import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMyProfilePage } from '../pages/user-my-profile/user-my-profile';
import { ComponentsModule } from '../components/components.module';
 
@NgModule({
  declarations: [
   ],
  imports: [
    IonicPageModule.forChild(UserMyProfilePage),
    ComponentsModule
  ],
})
export class UserModule {}
