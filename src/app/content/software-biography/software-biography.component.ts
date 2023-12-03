import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OpenInNewIconComponent } from '@shared/icons';
import { PlayRandomizedFadeInAnimateWhenInViewportDirective } from './animate-on-scroll.directive';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';

const fadeInStonehange = trigger('fadeInStonehenge', [
  transition(':enter', [
    query(':self', [
      style({ opacity: 0, transform: 'translateY(-300px)' }),
      animate('800ms ease-out', style({ opacity: 1, transform: 'none' })),
    ]),
  ]),
]);
const fadeInTitle = trigger('fadeInTitle', [
  transition(':enter', [
    query(':self', [
      style({ opacity: 0, transform: 'translateY(150px)' }),
      animate('500ms ease-out', style({ opacity: 1, transform: 'none' })),
    ]),
  ]),
]);

@Component({
  selector: 'content-software-biography',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatCardModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    OpenInNewIconComponent,
    MatIconModule,
    PlayRandomizedFadeInAnimateWhenInViewportDirective,
  ],
  templateUrl: './software-biography.component.html',
  styleUrl: './software-biography.component.scss',
  animations: [fadeInStonehange, fadeInTitle],
})
export class SoftwareBiographyComponent {}
