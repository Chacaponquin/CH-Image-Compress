import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompressorComponent } from './containers/compressor/compressor.component';
import { GaleryComponent } from './containers/galery/galery.component';

const routes = [
  { path: 'compressor', component: CompressorComponent },
  { path: 'galery', component: GaleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesRoutingModule {}
