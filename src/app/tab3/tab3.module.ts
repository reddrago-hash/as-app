import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Tab3Page } from './tab3.page'; // standalone component

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Tab3PageRoutingModule,
    Tab3Page
  ],
})
export class Tab3PageModule { }
