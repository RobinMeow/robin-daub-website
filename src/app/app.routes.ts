import { Routes } from '@angular/router';

const MY_FULL_NAME = 'Robin J. Daubenschütz';
const TITLE_SUFFIX: string = ' - ' + MY_FULL_NAME;

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: async () =>
      (await import('src/app/content/about/about.component')).AboutComponent,
    title: `About me` + TITLE_SUFFIX,
  },
  {
    path: 'aboutme',
    redirectTo: 'about',
    pathMatch: 'full',
  },

  {
    path: 'cookbook',
    loadComponent: async () =>
      (await import('src/app/content/cookbook/cookbook.component'))
        .CookbookComponent,
    title: `Cookbook` + TITLE_SUFFIX,
    pathMatch: 'full',
  },

  {
    path: 'books',
    loadComponent: async () =>
      (await import('src/app/content/books/books.component')).BooksComponent,
    title: `Books` + TITLE_SUFFIX,
    pathMatch: 'full',
  },

  {
    path: 'wanted-poster',
    loadComponent: async () =>
      (await import('src/app/content/wanted-poster/wanted-poster.component'))
        .WantedPosterComponent,
    title: `Wanted Poster` + TITLE_SUFFIX,
    pathMatch: 'full',
  },

  {
    path: 'resume',
    loadComponent: async () =>
      (await import('src/app/content/resume/resume.component')).ResumeComponent,
    title: `Resume` + TITLE_SUFFIX,
  },

  {
    path: 'software-biography',
    loadComponent: async () =>
      (
        await import(
          'src/app/content/software-biography/software-biography.component'
        )
      ).SoftwareBiographyComponent,
    title: `Software Biography` + TITLE_SUFFIX,
  },

  {
    path: 'tech-stack',
    loadComponent: async () =>
      (await import('src/app/content/tech-stack/tech-stack.component'))
        .TechStackComponent,
    title: `Tech-Stack` + TITLE_SUFFIX,
  },

  {
    path: 'credits',
    loadComponent: async () =>
      (await import('src/app/content/credits/credits.component'))
        .CreditsComponent,
    title: `Credits` + TITLE_SUFFIX,
  },
  {
    path: 'lorbeeren',
    redirectTo: 'credits',
    pathMatch: 'full',
  },

  {
    path: '',
    loadComponent: async () =>
      (await import('src/app/content/home/home.component')).HomeComponent,
    title: `Robin Daubenschütz`,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
