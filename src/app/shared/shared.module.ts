import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../modules/auth/auth.module';
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';
import sharedComponents from './components';

@NgModule({
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  imports: [
    BootstrapModule,
    CommonModule,
    RouterModule,
    AuthModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
