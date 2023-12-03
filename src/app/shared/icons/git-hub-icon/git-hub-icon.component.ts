import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'icon-git-hub-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './git-hub-icon.component.html',
  styleUrl: './git-hub-icon.component.scss',
})
export class GitHubIconComponent {
  // worked cool, but the head is always gray :D
  // private readonly _currentThemeSignal: Signal<string> =
  //   inject(ThemeSwitcherService).currentTheme;
  // protected readonly srcSignal: Signal<string> = computed(() => {
  //   return this._currentThemeSignal() === THEMES.DARK
  //     ? 'assets/github-mark-white.svg'
  //     : 'assets/github-mark.svg';
  // });
}
