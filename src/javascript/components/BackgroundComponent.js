import _ from 'underscore';
import {TweenMax, TimelineLite, TweenLite} from 'gsap/TweenMax';
import Lerp from '../utils/Lerp.js';
// EXAMPLE
class BackgroundComponent {

    constructor() {
        _.bindAll(
        this,
        '_tickHandler',
        '_resizeHandler',
        );

        this._canvas = document.querySelector('.js-background-component');
        this._ctx = this._canvas.getContext('2d');

        this._resize();
    }

    createBackground(images, imagePositions) {
        this._images = images;
        this._imagePositions = imagePositions;
        this._setupEventListener();
    }

    _resize() {
        this._width = window.innerWidth;
        this._height = window.innerHeight;

        this._canvas.width = this._width;
        this._canvas.height = this._height;
    }

    _draw() {
        this._createBackgroundImages();
    }

    _createBackgroundImages() {
        if (!this._images) return;
        
        for (let i = 0; i < this._images.length; i++) {
            let pixelRatio = this._images[i].width/this._images[i].height;
            let width = 500;
            let height = width / pixelRatio;

            this._ctx.drawImage(this._images[i], this._imagePositions[i].x - (width/2), this._imagePositions[i].y - (height/2), width, height);
        }
    }

    _setupEventListener() {
        TweenLite.ticker.addEventListener('tick', this._tickHandler);

        window.addEventListener('resize', this._resizeHandler);
    }

    _tickHandler() {
        this._draw();
    }

    _resizeHandler() {
        this._resize();
    }

}


export default new BackgroundComponent();