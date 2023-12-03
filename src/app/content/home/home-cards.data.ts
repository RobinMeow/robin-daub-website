import { HomeCard } from './home-card/home-card';

export const HOME_CARDS: HomeCard[] = [
  // Tech Stack
  {
    subtitle: $localize`Does it ever overflow?`, // DNA storage tooltip
    title: $localize`Tech Stack`,
    description: $localize`In-deth self-assessment of skills in various technologies.`,
    imageSource: `assets/computer-program-coding-screen.webp`,
    imageAlt: $localize`computer program coding screen`,
    matIconName: `analytics`,
    buttonText: $localize`Inspect Tech Stack`,
    routerLink: './tech-stack',
    disabled: false,
  },
  // Resume
  {
    subtitle: $localize`Hi, please allow me to introduce myself`,
    title: $localize`Resume`,
    description: $localize`Detailed description about my occupations and career.`,
    imageSource: `assets/robin-in-2013.webp`,
    imageAlt: $localize`Robin in 2013`,
    matIconName: `history_edu`,
    buttonText: $localize`Read Resume`,
    routerLink: './resume',
    disabled: false,
  },
  // Software Biography
  {
    subtitle: `A City is Not a Tree <i>(Christopher Alexander)</i>`,
    title: $localize`Software Biography`,
    description: $localize`A journey through my chronicle of software.`,
    imageSource: `assets/hand-drawn-colosseum.webp`,
    imageAlt: $localize`hand drawn colosseum of rome`,
    matIconName: `foundation_sharp`,
    buttonText: $localize`Take a tour`,
    routerLink: './software-biography',
    disabled: false,
  },
  // Wanted Poster
  {
    subtitle: `? ? ?`,
    title: `W A N T E D`,
    description: `<i>~ take a look</i> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>inside ~</i>`,
    imageSource: `assets/vintage-paper-question-mark.webp`,
    imageAlt: $localize`old parchment paper`,
    matIconName: `question_mark`,
    buttonText: $localize`find out more`,
    routerLink: './wanted-poster',
    disabled: false,
  },
];
