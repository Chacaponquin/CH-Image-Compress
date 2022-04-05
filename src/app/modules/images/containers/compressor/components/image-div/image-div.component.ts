import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.css'],
})
export class ImageDivComponent implements OnInit {
  @Input() image: string;
  constructor() {}

  ngOnInit(): void {}
}
