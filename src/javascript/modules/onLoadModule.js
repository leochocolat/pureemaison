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
            layer: document.querySelector('.js-background-clip__colored-overlay')
        }

        this._setupEventListener();
    }

    _setupEventListener() {
        window.addEventListener('load', this._loadHandler)
    }

    _loadHandler() {
        this._setupTween();
    }

    _setupTween() {
        this._tl = new TimelineLite();
    
        this._tweenValue = {
            clip: 100,
            layer: 100,
        }

        const timing = 0.9;
    
        this._tl.to(this._tweenValue, timing, {layer: 0, ease: Power3.easeInOut, onUpdate: this._updateLayerValue}, 1);
        this._tl.to(this._tweenValue, timing, {clip: 0, ease: Power3.easeInOut, onUpdate: this._updateClipValue, delay: .1, onComplete: this._animationCompleteHandler}, 1);
    }

    _updateLayerValue() {
        this.ui.layer.style.top = `${this._tweenValue.layer}%`;
    }
    
    _updateClipValue() {
        this.ui.clip.style.clipPath = `polygon(0 0, 100% 0, 100% ${this._tweenValue.clip}%, 0 ${this._tweenValue.clip}%)`;
    }

    _animationCompleteHandler() {
        this.ui.clip.display = 'none';
        this.ui.layer.display = 'none';
    }
    
}

export default new onLoadModule();



