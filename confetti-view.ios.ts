import {topmost} from 'ui/frame';

declare var SAConfettiView: any;

export class ConfettiView {

    private _confettiView: any;

    private _colors:Array<UIColor> = [
        UIColor.colorWithRedGreenBlueAlpha(0.95, 0.40, 0.27, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(1.00, 0.78, 0.36, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.48, 0.78, 0.64, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.30, 0.76, 0.85, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.58, 0.39, 0.55, 1.0)
    ];
    private _intensity: number = 0.5;
    private _active: boolean = false;

    constructor() {
        this._confettiView = new SAConfettiView(topmost());
        this._confettiView.colors = this._colors;
        this._confettiView.itensity = this._intensity;
        topmost().currentPage.ios.view.addSubview(this._confettiView);
    }

    public startConfetti() {
        if(this._confettiView && !this._active) {
            this._confettiView.startConfetti();
            this._active = true;
        }
    }

    public stopConfetti() {
        if(this._confettiView && this._active) {
            this._confettiView.stopConfetti();
            this._active = false;
        }
    }

    public intensity(intensity: number) {
        if(this._confettiView) {
            this._confettiView.intensity = intensity;
        }
    }

    public colors(colors: Array<any>) {
        if(this._confettiView) {
            this._confettiView.colors = colors;
        }
    }


}