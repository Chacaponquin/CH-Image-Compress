import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import homeComponents from './components';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [...homeComponents],
  exports: [...homeComponents],
})
export class HomeModule {}
