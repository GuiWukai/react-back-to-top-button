import { PureComponent } from "react";
declare global {
    interface Window {
        requestAnimFrame: Function;
        webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
        mozRequestAnimationFrame: Function;
    }
}
interface BackToTopProps {
    showAt: any;
    showOnScrollUp: any;
    style: any;
    onClick: Function;
    scrollTo: any;
    easing: any;
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
