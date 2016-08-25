# NativeScript ConfettiView Plugin
[![npm](https://img.shields.io/npm/v/nativescript-confettiview.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-confettiview) 
[![npm](https://img.shields.io/npm/dt/nativescript-confettiview.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-confettiview)

A NativeScript plugin to create an animated confetti view on iOS. Currently not supported on Android.

## Getting Started
* `npm install nativescript-confettiview`
* Import the `ConfettiView` into your page and start confetti!

```
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
```
### Available Functions
|Call Signature|Default|
|---|---|
|intensity(number)|0.5|
|colors(array)|UIColor[]|
|startConfetti()| |
|stopConfetti()| |


## Example
![Image](http://g.recordit.co/jT65B4NaqO.gif)



## Credits
* https://github.com/sudeepag/SAConfettiView for the original Pod
