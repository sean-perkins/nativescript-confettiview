import { topmost } from 'tns-core-modules/ui/frame';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { IConfettiTypes, ConfettiViewBase } from './common';

export class ConfettiView extends ConfettiViewBase {

    public static Types: IConfettiTypes = {
        confetti: ConfettiType.Confetti,
        triangle: ConfettiType.Triangle,
        star: ConfettiType.Star,
        diamond: ConfettiType.Diamond,
        image: ConfettiType.Image
    }

    private _colors: Array<UIColor> = [
        UIColor.colorWithRedGreenBlueAlpha(0.95, 0.40, 0.27, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(1.00, 0.78, 0.36, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.48, 0.78, 0.64, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.30, 0.76, 0.85, 1.0),
        UIColor.colorWithRedGreenBlueAlpha(0.58, 0.39, 0.55, 1.0)
    ];
    private _confetti: any;
    private _intensity: number = 0.5;
    private _active: boolean = false;
    private _autoStart: boolean = false;
    private _fullScreen: boolean = false;

    createNativeView() {
        const confetti = SAConfettiView.new();
        if (this._fullScreen) {
            // use dummy view
            this.nativeView = UIView.alloc().init();
            this._confetti = confetti;
            rootVC().view.addSubview(confetti);
        } else {
            this.nativeView = confetti;
        }
        return this.nativeView;
    }

    initNativeView() {
        const confetti = this._confetti || this.nativeView;
        confetti.colors = this._colors;
        confetti.intensity = this._intensity;
        confetti.autoStart = this._autoStart;
        confetti.fullScreen = this._fullScreen;
        if (this._autoStart) {
            this.startConfetti();
        }
        else {
            this.stopConfetti();
        }
    }

    destroyNativeView() {
        if (this.confetti) {
            this.stopConfetti();
            if (this._fullScreen) {
                this.confetti.removeFromSuperview();
            }
        }
    }

    public startConfetti() {
        if (this.confetti && !this._active) {
            this.confetti.startConfetti();
            this._active = true;
        }
    }

    public stopConfetti() {
        if (this.confetti && this._active) {
            this.confetti.stopConfetti();
            this._active = false;
        }
    }

    public set colors(value: Array<any>) {
        this._colors = value;
        if (this.confetti) {
            this.confetti.colors = value;
        }
    }

    public set intensity(value: number) {
        this._intensity = value;
        if (this.confetti) {
            this.confetti.intensity = value;
        }
    }

    public set fullScreen(value: boolean) {
        this._fullScreen = value;
    }    

    public get fullScreen() {
        return this._fullScreen;
    }

    public set autoStart(value: boolean) {
        this._autoStart = value;
    }    

    public get autoStart() {
        return this._autoStart;
    }

    public get confetti() {
        return this._confetti || this.nativeView;
    }
}

const rootVC = function() {
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
}