import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() error: string;
  @Output() cleanError: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.cleanError.emit();
  }
}
