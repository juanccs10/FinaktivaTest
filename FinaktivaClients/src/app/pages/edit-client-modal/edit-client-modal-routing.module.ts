import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientModalPage } from './edit-client-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditClientModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClientModalPageRoutingModule {}
