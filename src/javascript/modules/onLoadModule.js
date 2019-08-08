import _ from 'underscore';
import {TweenMax, TimelineLite, TweenLite, Power3, Power4} from 'gsap/TweenMax';
import Lerp from '../utils/Lerp.js';

class onLoadModule {

    constructor() {
        _.bindAll(
            this,
            '_loadHandler',
            '_updateLayerValue',
            '_updateClipValue',
            '_animationCompleteHandler'
        );

        this.ui = {
            clip: document.querySelector('.js-background-clip'),
            layer: document.querySelector('.js-background-clip__colored-overlay'),
            navbar: document.querySelector('.js-navbar'),
            lines: document.querySelectorAll('.js-load-animation'),
            paragraph: document.querySelector('.js-paragraph-animation'),
            button: document.querySelector('.js-button'),
        }

        this._spliteParagraph();

        this._setupEventListener();
    }

    _setupEventListener() {
        window.addEventListener('load', this._loadHandler)
    }

    _loadHandler() {
        this._setupTween();
    }

    _spliteParagraph() {
        let paragraph = this.ui.paragraph;
        let size = this.ui.paragraph.innerHeight;
    }

    _setupTween() {
        this._tl = new TimelineLite();
    
        this._tweenValue = {
            clip: 100,
            layer: 100,
            navbar: -100
        }

        const timing = 0.9;
    
        this._tl.to(this._tweenValue, timing, {layer: 0, ease: Power3.easeInOut, onUpdate: this._updateLayerValue}, 1);
        this._tl.to(this._tweenValue, timing, {clip: 0, ease: Power3.easeInOut, onUpdate: this._updateClipValue, delay: .1}, 1);

        this._tl.from(this.ui.navbar, 1.3, {y: '-150%', ease: Power0.linear, delay: 0.4}, 1);

        this._tl.staggerFrom(this.ui.lines, 0.7, {y: 50, opacity: 0, ease: Power3.easeInOut, delay: 0.6, onComplete: this._animationCompleteHandler}, 0.2, 1);
    }

    _updateLayerValue() {
        this.ui.layer.style.top = `${this._tweenValue.layer}%`;
    }
    
    _updateClipValue() {
        this.ui.clip.style.clipPath = `polygon(0 0, 100% 0, 100% ${this._tweenValue.clip}%, 0 ${this._tweenValue.clip}%)`;
        this._setVendor(this.ui.clip, 'clip-path', `polygon(0 0, 100% 0, 100% ${this._tweenValue.clip}%, 0 ${this._tweenValue.clip}%)`);
    }

    _setVendor(element, property, value) {
        element.style["webkit" + property] = value;
        element.style["moz" + property] = value;
        element.style["ms" + property] = value;
        element.style["o" + property] = value;
      }

    _animationCompleteHandler() {
        this.ui.clip.display = 'none';
        this.ui.layer.display = 'none';
    
        setTimeout(() => {
            this.ui.button.classList.add('button-secondary--is-active');
        }, 300);
    }
    
}

export default new onLoadModule();



