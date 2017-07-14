import { topmost } from 'tns-core-modules/ui/frame';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Color } from 'tns-core-modules/color';
import { setTimeout } from 'tns-core-modules/timer';
import { IConfettiTypes, ConfettiViewBase } from './common';

declare var com;
const CommonConfetti = com.github.jinatonic.confetti.CommonConfetti;

export class ConfettiView extends ConfettiViewBase {

  public static Types: IConfettiTypes; // not common! prob remove
  
  private _confetti: any;
  private _container: any;
  private _intensity: number = 0.5;
  private _active: boolean = false;
  private _autoStart: boolean = true;
  private _fullScreen: boolean = false;
  private _colors: Array<string> = ['#f9583c', '#dd355b'];

  initNativeView() {

    setTimeout(() => {
      // wait until measurements of container are ready
      // TODO: need new lifecycle hook for this on Android
      let intArray = Array.create('int', this._colors.length);
      for (let i = 0; i < this._colors.length; i++) {
        intArray[i] = new Color(this._colors[i]).android;
      }
      this._confetti = CommonConfetti.rainingConfetti(this.container, intArray);
      if (this._autoStart) {
        this.startConfetti();
      }
    }, 1000);
  }

  destroyNativeView() {
    this.stopConfetti();
    this._container = null;
    this._confetti = null;
  }

  public startConfetti() { 
    if (this._confetti) {
      this._confetti.infinite();
    }
  }

  public stopConfetti() {
    if (this._confetti) {
      this._confetti.getConfettiManager().terminate();
    }
   }

  public set container(value: any) {
    this._container = value.android;
  }

  public get container() {
    // use android view parent as the default
    return this._container || this.parent.android;
  }

  public set colors(value: Array<string>) { 
    this._colors = value;
  }

  public set intensity(value: number) { }

  public set fullScreen(value: boolean) { }

  public get fullScreen(): boolean { return false; }

  public get confetti(): any { return this._confetti; }
}