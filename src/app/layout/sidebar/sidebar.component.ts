import {
  Component,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CatServerIsDownComponent } from '@cats';
import { EcoSymbolComponent } from '@shared/icons';
import { finalize } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'layout-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    RouterModule,
    EcoSymbolComponent,
    MatDividerModule,
    NgOptimizedImage,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly _httpClient = inject(HttpClient);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _domSanitizer = inject(DomSanitizer);

  @Input({ required: true }) drawer!: MatDrawer;

  protected readonly isLoadingCat: WritableSignal<boolean> = signal(false);
  protected readonly catSrc = signal<unknown | null>(null);

  ngOnInit(): void {
    this.drawer.close();
  }

  protected closeSidenav() {
    const IS_MOBILE: boolean = window.innerWidth < 600;
    if (IS_MOBILE) {
      this.drawer.close();
    }
  }

  protected loadCat() {
    this.catSrc.set(null);
    if (this.isLoadingCat()) return;

    // https://cataas.com/cat/cute?type=square
    // https://thecatapi.com/api/images/get?format=src&type=jpg

    this.isLoadingCat.set(true);

    // tech, pc, computer, programmer, headphones, gamer, gaming (to little count :c )
    this._httpClient
      .get(`https://cataas.com/cat?type=square`, {
        responseType: 'blob',
        headers: new HttpHeaders().set('accept', 'image/*'),
      })
      .pipe(finalize(() => this.isLoadingCat.set(false)))
      .subscribe({
        next: (response) => {
          this.catSrc.set(
            this._domSanitizer.bypassSecurityTrustUrl(
              URL.createObjectURL(response),
            ),
          );
        },
        error: (error) => {
          this._snackBar.openFromComponent(CatServerIsDownComponent, {
            duration: 4500,
          });
        },
      });
  }
}
