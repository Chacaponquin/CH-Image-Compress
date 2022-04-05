import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images/images.service';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css'],
})
export class CompressorComponent implements OnInit {
  imageOriginal: File | null = null;

  imageShow: null | string = null;
  imageResult: null | string = null;
  loading: boolean = false;
  error: null | string = null;

  constructor(
    private imagesService: ImagesService,
    private imageCompress: NgxImageCompressService
  ) {}

  ngOnInit(): void {}

  noError(): void {
    this.error = null;
  }

  changeImage(files) {
    if (files.length) {
      this.imageOriginal = files.item(0);

      const reader = new FileReader();
      reader.onload = (e) => (this.imageShow = String(reader.result));

      reader.readAsDataURL(this.imageOriginal);
    }
  }

  onSubmit() {
    console.log(this.error);
    this.loading = true;
    this.imageCompress
      .compressFile(this.imageShow, 100, 35, 30)
      .then((result) => (this.imageResult = result))
      .catch((err) => (this.error = 'Hubo un error'))
      .finally(() => (this.loading = false));
  }
}
