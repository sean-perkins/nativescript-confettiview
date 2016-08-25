import {Observable} from 'data/observable';
import {ConfettiView} from 'nativescript-confettiview';

export class HelloWorldModel extends Observable {

  private confettiView: any;

  constructor() {
    super();
    this.confettiView = new ConfettiView();
    this.confettiView.startConfetti();
  }

  public stopConfetti() {
    this.confettiView.stopConfetti();
  }

  public startConfetti() {
    this.confettiView.startConfetti();
  }

}