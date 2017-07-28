import { IConfettiTypes, ConfettiViewBase } from './common';
export declare class ConfettiView extends ConfettiViewBase {
    static Types: IConfettiTypes;
    private _confetti;
    private _container;
    private _intensity;
    private _active;
    private _autoStart;
    private _fullScreen;
    private _colors;
    initNativeView(): void;
    destroyNativeView(): void;
    startConfetti(): void;
    stopConfetti(): void;
    container: any;
    colors: Array<string>;
    intensity: number;
    fullScreen: boolean;
    autoStart: boolean;
    readonly confetti: any;
}
