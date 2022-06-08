import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VindasPage } from './vindas.page';

const routes: Routes = [
  {
    path: '',
    component: VindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VindasPageRoutingModule {}
