import { ContentView } from 'tns-core-modules/ui/content-view';
export interface IConfettiTypes {
    confetti: number;
    triangle: number;
    star: number;
    diamond: number;
    image: number;
}
export declare abstract class ConfettiViewBase extends ContentView {
    static Types: IConfettiTypes;
    startConfetti(): void;
    stopConfetti(): void;
    colors: Array<any>;
    intensity: number;
    fullScreen: boolean;
    autoStart: boolean;
    readonly confetti: any;
}
