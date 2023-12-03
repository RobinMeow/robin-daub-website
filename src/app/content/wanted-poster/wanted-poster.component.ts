import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TypedComponent } from '@shared';

@Component({
  selector: 'content-wanted-poster',
  standalone: true,
  imports: [CommonModule, TypedComponent, NgOptimizedImage],
  templateUrl: './wanted-poster.component.html',
  styleUrl: './wanted-poster.component.scss',
})
export class WantedPosterComponent implements OnInit {
  protected readonly startDelaySpec: number = 400;

  ngOnInit(): void {
    window.top?.scrollTo();
  }
}
