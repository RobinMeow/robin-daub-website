export interface HomeCard {
  /** is on top of the card, with low contrast */
  subtitle: string;
  /** after subtitle, but bigger and high contrast */
  title: string;
  description: string;
  /** has to be exact 262 x 289 */
  imageSource: string;
  imageAlt: string;
  matIconName: string;
  /** use plain text only - does not support html code */
  buttonText: string;
  routerLink: string;
  disabled: boolean;
}
