import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClientModalPageRoutingModule } from './view-client-modal-routing.module';

import { ViewClientModalPage } from './view-client-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClientModalPageRoutingModule
  ],
  declarations: [ViewClientModalPage]
})
export class ViewClientModalPageModule {}
