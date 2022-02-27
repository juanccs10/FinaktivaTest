import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClientModalPage } from './view-client-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClientModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClientModalPageRoutingModule {}
