import { Observable } from 'data/observable';
import { Page } from 'ui/page';
// import { ConfettiView } from 'nativescript-confettiview';

export class HelloWorldModel extends Observable {
    public container;
    public colors = ['#f9583c', '#dd355b', '#143d52', '#1a1b51', '#312b78'];
    private confettiView: any;
    

  constructor(page: Page) {
      super();
    //   this.container = page.getViewById('container');  
    //   console.log('HelloWorldModel container:', this.container.android);
    this.confettiView = page.getViewById('confetti');
    console.log('Demo this.confettiView:', this.confettiView);
  }

  public stopConfetti() {
    this.confettiView.stopConfetti();
  }

  public startConfetti() {
    this.confettiView.startConfetti();
  }

}