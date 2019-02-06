import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpScreenPage } from './otp-screen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OtpScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpScreenPage),
    ComponentsModule
  ],
})
export class OtpScreenPageModule {}
