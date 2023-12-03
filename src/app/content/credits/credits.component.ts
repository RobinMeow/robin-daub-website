import { Component } from '@angular/core';
import { CreditsEntry } from './CreditsEntry';
import { CREDITS_DATA } from './credits-data';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'content-credits',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatRippleModule],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss',
})
export class CreditsComponent {
  protected readonly creditEntries: CreditsEntry[] = CREDITS_DATA;
  protected readonly displayedColumns: string[] = ['name', 'link'];
}
