import { Component } from '@angular/core';
import { HomeCard } from './home-card/home-card';
import { HOME_CARDS } from './home-cards.data';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'content-home',
  standalone: true,
  imports: [HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly homeCards: HomeCard[] = HOME_CARDS;
}
