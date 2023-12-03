import { Resume } from './Resume';

export const RESUME_ENTRIES: Resume[] = [
  {
    profession: $localize`Technical college entrance qualification <br>+ Technical assistant`,
    start: 2015,
    end: 2017,
    location: `IB Eislingen`,
    description:
      `<ul><li>HTML</li><li>CSS</li><li>Java</li><li>` +
      `Entity-Relationship-Modelling` +
      `</li><li>SQL</li><li>` +
      $localize`Relational notation` +
      `</li></ul>`,
  },
  {
    profession: $localize`Study in Software Engineering`,
    start: 2017,
    end: 2018,
    location: $localize`Aalen University`,
    description: $localize`Canceled to take up an apprenticeship instead`,
  },
  {
    profession: $localize`Internship Full-Stack Developer`,
    start: 2019,
    end: 2019,
    location: `cloud4you AG, Ellwangen<br>CIFS GmbH, Ellwangen`,
    description: $localize`Learning the basics of SQL, C#, and Windows Forms. <br>Getting into ASP.NET and MSSQL and Console Applications`,
  },
  {
    profession: $localize`Full-Stack Developer / <br>IT Specialist - Application developer`,
    start: 2019,
    end: 2022,
    location: `cloud4you AG, Ellwangen`,
    description: $localize`Design, develop and maintain enterprise software using
        ASP.NET, Console Applications, Windows Forms, C# 7.0, .Net Framework 4.8, SQL and MSSQL`,
  },
  {
    profession: $localize`Freelance part-time job <br>as Software Developer <br>in Unity and Web`,
    start: 2022,
    end: 2023,
    location: `Innoversa, Mannheim`,
    description: $localize`Development with Unity on a prototype game (focus on Game Loop logic). <br>Refactoring and clean-up of an existing game.`,
  },
  {
    profession: $localize`Back-End Software Developer`,
    start: 2023,
    end: null,
    location: `Innoversa Factory GmbH (Start-up), Heidelberg`,
    description: $localize`Development of modular tools in Unity, to improve development time and flexibilty of designers.`,
  },
];
