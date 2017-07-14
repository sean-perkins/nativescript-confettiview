
declare const enum ConfettiType {

	Confetti = 0,

	Triangle = 1,

	Star = 2,

	Diamond = 3,

	Image = 4
}

declare class SAConfettiView extends UIView {

	static alloc(): SAConfettiView; // inherited from NSObject

	static appearance(): SAConfettiView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SAConfettiView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SAConfettiView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): SAConfettiView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SAConfettiView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): SAConfettiView; // inherited from UIAppearance

	static new(): SAConfettiView; // inherited from NSObject

	colors: NSArray<UIColor>;

	customImage: UIImage;

	isActive(): boolean;

	startConfetti(): void;

	stopConfetti(): void;
}

declare var SAConfettiViewVersionNumber: number;

declare var SAConfettiViewVersionString: interop.Reference<number>;
