/* eslint-disable */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 45px;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 30px;\n  border-radius: 50%;\n  border: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.4s opacity ease;\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n"], ["\n  font-size: 45px;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 30px;\n  border-radius: 50%;\n  border: none;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.4s opacity ease;\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n"])));
function scrollToY(scrollTargetYY, speedd, easingg) {
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var scrollTargetY = scrollTargetYY || 0;
    var speed = speedd || 2000;
    var easing = easingg || "easeOutSine";
    var currentTime = 0;
    var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
    var easingEquations = {
        easeOutSine: function (pos) { return Math.sin(pos * (Math.PI / 2)); },
        easeInOutSine: function (pos) { return -0.5 * (Math.cos(Math.PI * pos) - 1); },
        easeInOutQuint: function (pos) {
            var newPos = pos;
            newPos /= 0.5;
            if (newPos < 1) {
                return 0.5 * Math.pow(newPos, 5);
            }
            return 0.5 * Math.pow((newPos - 2), 5) + 2;
        }
    };
    function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[easing](p);
        if (p < 1) {
            window.requestAnimFrame(tick);
            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        }
        else {
            window.scrollTo(0, scrollTargetY);
        }
    }
    tick();
}
var Easing;
(function (Easing) {
    Easing[Easing["easeOutSine"] = 0] = "easeOutSine";
    Easing[Easing["easeInOutSine"] = 1] = "easeInOutSine";
    Easing[Easing["easeInOutQuint"] = 2] = "easeInOutQuint";
})(Easing || (Easing = {}));
var BackToTop = /** @class */ (function (_super) {
    __extends(BackToTop, _super);
    function BackToTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isAtRange: false
        };
        _this.componentDidMount = function () {
            window.requestAnimFrame = (function () {
                var clb = function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
                return (window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    clb);
            })();
            var lastScrollTop = 0;
            window.addEventListener("scroll", function () {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                var backToTop = document.querySelector(".back-to-top");
                var showAt = _this.props.showAt || 1000;
                if (st > showAt) {
                    _this.setState({ isAtRange: true });
                }
                else {
                    _this.setState({ isAtRange: false });
                }
                if (_this.props.showOnScrollUp) {
                    if (st > lastScrollTop) {
                        backToTop.style.opacity = "0";
                        backToTop.style.visibility = "hidden";
                    }
                    else if (_this.state.isAtRange) {
                        backToTop.style.opacity = "1";
                        backToTop.style.visibility = "visible";
                    }
                    else {
                        backToTop.style.opacity = "0";
                        backToTop.style.visibility = "hidden";
                    }
                }
                else if (_this.state.isAtRange) {
                    backToTop.style.opacity = "1";
                    backToTop.style.visibility = "visible";
                }
                else {
                    backToTop.style.opacity = "0";
                    backToTop.style.visibility = "hidden";
                }
                lastScrollTop = st <= 0 ? 0 : st;
            }, false);
        };
        _this.moveToTop = function () {
            _this.props.onClick ? _this.props.onClick() : null;
            scrollToY(_this.props.scrollTo, _this.props.speed, _this.props.easing);
        };
        return _this;
    }
    BackToTop.prototype.render = function () {
        return (React.createElement(Button, { className: "back-to-top", onClick: this.moveToTop, style: this.props.style }, this.props.children || "UP"));
    };
    return BackToTop;
}(PureComponent));
var templateObject_1;

export { BackToTop };
