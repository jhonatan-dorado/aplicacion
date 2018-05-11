import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablaPage } from './tabla';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    TablaPage,
  ],
  imports: [
    IonicPageModule.forChild(TablaPage),
    IonicImageLoader
  ],
})
export class TablaPageModule {}
