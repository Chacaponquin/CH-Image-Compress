import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {
  @Output() setImage: EventEmitter<File> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendImage(event) {
    if (event.target.files[0]) this.setImage.emit(event.target.files[0]);
  }
}
