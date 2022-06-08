import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VindasPageRoutingModule } from './vindas-routing.module';

import { VindasPage } from './vindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VindasPageRoutingModule
  ],
  declarations: [VindasPage]
})
export class VindasPageModule {}
