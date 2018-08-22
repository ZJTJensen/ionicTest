import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamnetsPage } from './tournamnets';

@NgModule({
  declarations: [
    TournamnetsPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamnetsPage),
  ],
})
export class TournamnetsPageModule {}
