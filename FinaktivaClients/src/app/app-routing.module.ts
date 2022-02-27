import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-client-modal',
    loadChildren: () => import('./pages/add-client-modal/add-client-modal.module').then( m => m.AddClientModalPageModule)
  },
  {
    path: 'edit-client-modal',
    loadChildren: () => import('./pages/edit-client-modal/edit-client-modal.module').then( m => m.EditClientModalPageModule)
  },
  {
    path: 'view-client-modal',
    loadChildren: () => import('./pages/view-client-modal/view-client-modal.module').then( m => m.ViewClientModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
