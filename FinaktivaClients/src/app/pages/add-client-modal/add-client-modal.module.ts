import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientModalPageRoutingModule } from './add-client-modal-routing.module';

import { AddClientModalPage } from './add-client-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddClientModalPageRoutingModule
  ],
  declarations: [AddClientModalPage]
})
export class AddClientModalPageModule {}
