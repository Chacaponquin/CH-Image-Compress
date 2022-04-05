import { Component, OnInit } from '@angular/core';
import { HomeCardInterface } from 'src/app/data/interfaces/homeCard.metadata';
import { homeCardsInf } from '../../../../data/const/homeCards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeCards: HomeCardInterface[] = homeCardsInf;
  constructor() {}

  ngOnInit(): void {}
}
