import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { RESUME_ENTRIES } from './resume.data';
import { Resume } from './Resume';

@Component({
  selector: 'content-resume',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  protected readonly resumeEntries: Resume[] = RESUME_ENTRIES;
}
