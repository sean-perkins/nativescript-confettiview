import { IConfettiTypes, ConfettiViewBase } from './common';
export declare class ConfettiView extends ConfettiViewBase {
    static Types: IConfettiTypes;
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
