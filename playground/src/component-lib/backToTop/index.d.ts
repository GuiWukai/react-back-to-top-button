import { PureComponent } from "react";
declare global {
    interface Window {
        requestAnimFrame: Function;
        webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozRequestAnimationFrame: Function;
    }
}
declare enum Easing {
    easeOutSine = 0,
    easeInOutSine = 1,
    easeInOutQuint = 2
}
interface BackToTopProps {
    showAt: any;
    showOnScrollUp: any;
    style: any;
    onClick: Function;
    scrollTo: any;
    easing: Easing;
    speed: any;
}
export declare class BackToTop extends PureComponent<BackToTopProps> {
    state: {
        isAtRange: boolean;
    };
    componentDidMount: () => void;
    moveToTop: () => void;
    render(): JSX.Element;
}
export {};
