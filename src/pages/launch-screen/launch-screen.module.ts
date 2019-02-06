import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchScreenPage } from './launch-screen';
import { ComponentsModule } from '../../components/components.module';
import { ApiService } from '../../services/ApiService';

@NgModule({
  declarations: [
    LaunchScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchScreenPage),
    ComponentsModule
  ],
  exports :[ 
    LaunchScreenPage
  ], 
 // providers :[ApiService]
})
export class LaunchScreenPageModule {}
