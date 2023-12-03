import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'icon-open-in-new',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './open-in-new-icon.component.html',
  styleUrl: './open-in-new-icon.component.scss',
})
export class OpenInNewIconComponent {}
