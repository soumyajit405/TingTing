import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPinPage } from './launch-pin';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LaunchPinPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPinPage),
    ComponentsModule
  ],
})
export class LaunchPinPageModule {}
