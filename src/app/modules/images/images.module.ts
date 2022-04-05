import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import imagesComponents from './containers';
import { ImagesRoutingModule } from './images-routing.module';
import { NgxImageCompressService } from 'ngx-image-compress';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...imagesComponents],
  imports: [CommonModule, ImagesRoutingModule, SharedModule],
  providers: [NgxImageCompressService],
})
export class ImagesModule {}
