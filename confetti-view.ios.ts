import {ContentView} from 'ui/content-view';
import {topmost} from 'ui/frame';
import {screen} from 'platform';

declare var CGPoint, CGSize;

export class ConfettiView extends ContentView {

    private _ios: any;

    private emitter: CAEmitterLayer;

    private colors:Array<UIColor> = [
        UIColor.colorWithRedGreenBlueAlpha(0.95, 0.40, 0.27, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(1.00, 0.78, 0.36, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.48, 0.78, 0.64, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.30, 0.76, 0.85, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.58, 0.39, 0.55, 1.0)
    ];
    private intensity: number = 0.5;
    private type: ConfettiType = ConfettiType.Confetti;
    private _active: boolean = true;

    constructor() {
        super();
    }

    startConfetti() {
        this.emitter = CAEmitterLayer.new();

        this.emitter.emitterPosition = CGPoint(screen.mainScreen.widthDIPs / 2.0, 0);
        this.emitter.emitterShape = kCAEmitterLayerLine;
        this.emitter.emitterSize = CGSize(screen.mainScreen.widthDIPs, 1);
        var cells: any = [];
        for(let color of this.colors) {
            cells.push(this.confettiWithColor(color));
        }
        this.emitter.emitterCells = cells;

        topmost().page.ios.addSublayer(this.emitter);
        this._active = true;
    }

    stopConfetti() {
        if(this.emitter) {
            this.emitter.birthRate = 0;
        }
        this._active = false;
    }

    confettiWithColor(color: UIColor): CAEmitterCell {
        let confetti = CAEmitterCell.new();
        confetti.birthRate = 6.0 * this.intensity;
        confetti.lifetime = 14.0 * this.intensity;
        confetti.lifetimeRange = 0;
        confetti.color = color.CGColor;

        confetti.velocity = (350.0 * this.intensity);
        confetti.velocityRange = (80.0 * this.intensity);
        confetti.emissionLongitude = 3.14159265358979323846;
        confetti.emissionRange = 0.785398163397448309616;
        confetti.spin = (3.5 * this.intensity);
        confetti.spinRange = (4.0 * this.intensity);
        confetti.scaleRange = this.intensity;
        confetti.scaleSpeed = (-0.1 * this.intensity);
        // confetti.contents = imageForType(type)!.CGImage
        return confetti;
    }

    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

    set active(active: boolean) {
        this._active = active;
        if(active) {
            this.startConfetti();
        }
        else {
            this.stopConfetti();
        }
    }

    get isActive(): boolean {
        return this._active;
    }

}

enum ConfettiType {
    Confetti,
    Triangle,
    Star,
    Diamond,
    Image
}