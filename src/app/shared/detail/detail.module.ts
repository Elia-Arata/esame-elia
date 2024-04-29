import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxGaugeModule } from 'ngx-gauge';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, MatDialogModule, NgxGaugeModule],
  exports: [DetailComponent],
})
export class DetailModule {}
