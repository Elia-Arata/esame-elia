import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';

const routes = [{ path: '', component: ChartsComponent }];

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ChartsComponent, RouterModule],
})
export class ChartsModule {}
