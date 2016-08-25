import { ContentView } from 'ui/content-view';
export declare class ConfettiView extends ContentView {
    private _ios;
    private emitter;
    private colors;
    private intensity;
    private type;
    private _active;
    constructor();
    startConfetti(): void;
    stopConfetti(): void;
    confettiWithColor(color: UIColor): CAEmitterCell;
    ios: any;
    _nativeView: any;
    active: boolean;
    isActive: boolean;
}
