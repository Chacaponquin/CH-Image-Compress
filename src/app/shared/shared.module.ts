import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';
import sharedComponents from './components';

@NgModule({
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  imports: [BootstrapModule, CommonModule, RouterModule],
})
export class SharedModule {}
