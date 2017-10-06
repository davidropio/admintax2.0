import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentMainPage } from './content-main';

@NgModule({
  declarations: [
    ContentMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentMainPage),
  ],
})
export class ContentMainPageModule {}
