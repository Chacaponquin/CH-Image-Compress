import { Component, Input, OnInit } from '@angular/core';
import { HomeCardInterface } from 'src/app/data/interfaces/homeCard.metadata';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  @Input() homeCard: HomeCardInterface;

  constructor() {}

  ngOnInit(): void {}
}
