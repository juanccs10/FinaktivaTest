import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClientModalPageRoutingModule } from './edit-client-modal-routing.module';

import { EditClientModalPage } from './edit-client-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditClientModalPageRoutingModule
  ],
  declarations: [EditClientModalPage]
})
export class EditClientModalPageModule {}
