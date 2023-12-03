import { Component } from '@angular/core';
import { OpenInNewIconComponent } from '@shared/icons';

@Component({
  selector: 'content-cookbook',
  standalone: true,
  imports: [OpenInNewIconComponent],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss',
})
export class CookbookComponent {}
