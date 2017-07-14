import { ContentView } from 'tns-core-modules/ui/content-view';

export interface IConfettiTypes {
  confetti: number;
  triangle: number;
  star: number;
  diamond: number;
  image: number;
}

export abstract class ConfettiViewBase extends ContentView {
  public static Types: IConfettiTypes;

  public startConfetti() { }

  public stopConfetti() { }

  public set colors(value: Array<any>) { }

  public set intensity(value: number) { }

  public set fullScreen(value: boolean) { }

  public get fullScreen() { return false; }

  public get confetti() { return null; }
}