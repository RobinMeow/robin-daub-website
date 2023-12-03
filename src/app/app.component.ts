import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '@layout';
import { THEMES, ThemeSwitcherService } from '@theming';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected readonly themeSwitcher = inject(ThemeSwitcherService);
  protected readonly LIGHT_THEME = THEMES.LIGHT;

  ngOnInit(): void {
    window.top?.scrollTo();
  }
}
