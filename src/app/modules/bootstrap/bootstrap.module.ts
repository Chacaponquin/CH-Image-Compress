import { NgModule } from '@angular/core';
import { NgbToastModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const bootstrapComponents = [NgbToastModule, NgbAlertModule];

@NgModule({
  declarations: [],
  exports: [...bootstrapComponents],
})
export class BootstrapModule {}
