import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-image',
  templateUrl: './galery-image.component.html',
  styleUrls: ['./galery-image.component.css'],
})
export class GaleryImageComponent implements OnInit {
  @Input() userImages: { _id: string; url: string }[];

  constructor() {}

  ngOnInit(): void {}
}
