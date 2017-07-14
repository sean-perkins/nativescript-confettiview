import { ContentView } from 'tns-core-modules/ui/content-view';
export declare class ConfettiView extends ContentView {
    private _colors;
    private _confetti;
    private _intensity;
    private _active;
    private _autoStart;
    private _fullScreen;
    createNativeView(): any;
    initNativeView(): void;
    destroyNativeView(): void;
    startConfetti(): void;
    stopConfetti(): void;
    colors: Array<any>;
    intensity: number;
    fullScreen: boolean;
    readonly confetti: any;
}
