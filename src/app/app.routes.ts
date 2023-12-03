import { Routes } from '@angular/router';

const MY_FULL_NAME = 'Robin J. Daubenschütz';
const TITLE_SUFFIX: string = ' - ' + MY_FULL_NAME;

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: async () =>
      (await import('src/app/content/about/about.component')).AboutComponent,
    title: $localize`About me` + TITLE_SUFFIX,
  },
  {
    path: 'aboutme',
    redirectTo: 'about',
    pathMatch: 'full',
  },

  // {
  //   path: 'blogs',
  //   loadComponent: () => import('src/app/content/blogs/blogs.component'),
  //   title: $localize`Blogs` + TITLE_SUFFIX,
  // },

  // {
  //   path: 'wanted-poster',
  //   loadComponent: () =>
  //     import('src/app/content/home/wanted-poster/wanted-poster.component'),
  //   title: $localize`Wanted Poster` + TITLE_SUFFIX,
  //   pathMatch: 'full',
  // },

  // {
  //   path: 'resume',
  //   loadComponent: () => import('src/app/content/home/resume/resume.component'),
  //   title: $localize`Resume` + TITLE_SUFFIX,
  // },

  {
    path: 'software-biography',
    loadComponent: async () =>
      (
        await import(
          'src/app/content/software-biography/software-biography.component'
        )
      ).SoftwareBiographyComponent,
    title: $localize`Software Biography` + TITLE_SUFFIX,
  },

  // {
  //   path: 'tech-stack',
  //   loadComponent: () =>
  //     import('src/app/content/home/tech-stack/tech-stack.component').then(
  //       (c) => c.TechStackComponent,
  //     ),
  //   title: $localize`Tech-Stack` + TITLE_SUFFIX,
  // },

  {
    path: 'credits',
    loadComponent: async () =>
      (await import('src/app/content/credits/credits.component'))
        .CreditsComponent,
    title: $localize`Credits` + TITLE_SUFFIX,
  },
  {
    path: 'lorbeeren',
    redirectTo: 'credits',
    pathMatch: 'full',
  },

  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('src/app/content/home/home.component').then(
  //       (c) => c.HomeComponent,
  //     ),
  //   title: `Robin Daubenschütz`,
  // },
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
