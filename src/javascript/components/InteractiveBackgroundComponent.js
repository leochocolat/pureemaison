import _ from 'underscore';
import {TweenMax, TimelineLite, TweenLite} from 'gsap/TweenMax';
import Lerp from '../utils/Lerp.js';

import BackgroundComponent from './BackgroundComponent.js';
// EXAMPLE
class InteractiveBackgroundComponent {

  constructor() {
    _.bindAll(
      this,
      '_tickHandler',
      '_resizeHandler',
      '_mousemoveHandler'
    );

    this._canvas = document.querySelector('.js-interactive-background-component');
    this._ctx = this._canvas.getContext('2d');

    this._dataOrange = [
        '1.svg',
        '2.svg',
        '3.svg',
        '4.svg',
        '5.svg'
    ]

    this._dataPurple = [
        '1.svg',
        '2.svg',
        '3.svg',
        '4.svg',
        '5.svg'
    ]

    this._init();
  }

  _init() {
    this._resize();

    this._loadImages();

    this._ballPosition = {
      x: this._width/2,
      y: this._height/2
    }

  }

  _resize() {
    this._width = window.innerWidth;
    this._height = window.innerHeight;

    this._canvas.width = this._width;
    this._canvas.height = this._height;
  }

  _loadImages() {
    let paths = [
        './assets/images/shapes/orange/',
        './assets/images/shapes/violet/'
    ];

    let promises = [];
    
    for (let i = 0; i < this._dataOrange.length; i++) {
        let img;
        let url = `${paths[0]}${this._dataOrange[i]}`;
        img = new Image();
        img.src = url;
        let promise = new Promise((resolve, reject) => {
            img.addEventListener('load', resolve(img));
            img.addEventListener('error', () => {
            reject(new Error(`Failed to load image's URL: ${url}`));
            });
        });
        promises.push(promise);
    }

    for (let i = 0; i < this._dataPurple.length; i++) {
        let img;
        let url = `${paths[1]}${this._dataPurple[i]}`;
        img = new Image();
        img.src = url;
        let promise = new Promise((resolve, reject) => {
            img.addEventListener('load', resolve(img));
            img.addEventListener('error', () => {
            reject(new Error(`Failed to load image's URL: ${url}`));
            });
        });
        promises.push(promise);
    }


    Promise.all(promises).then(result => {

        this._imageOrange = [];
        this._imagePurple = [];

        for (let i = 0; i < result.length; i++) {
            let str = result[i].src;
            let orange = new RegExp('orange');
            let violet = new RegExp('violet');

            if (orange.test(str)) {
                this._imageOrange.push(result[i]);
            } else if (violet.test(str)) {
                this._imagePurple.push(result[i]);
            }
        }
        
        this._start();      
        this._start();      
    });
  }

  _initImagesPositions() {
    this._imagePositions = [];

        for (let i = 0; i < this._imageOrange.length; i++) {
            let pos = {
                x: Math.random() * this._width,
                y: Math.random() * this._height,
            }
            this._imagePositions.push(pos);
        }
    }

  _start() {
    this._initImagesPositions();
    this._setupEventListener();

    // BackgroundComponent.createBackground(this._imagePurple, this._imagePositions);
    this._draw();
  }

  _draw() {
    this._ctx.clearRect(0, 0, this._width, this._height);
    this._createBackgroundImages();
    this._createBackgroundImagesLayer();
    this._createBall();
    this._updatePositions();
  }

  _createBall() {
    const radius = 200;

    this._ctx.globalCompositeOperation = 'destination-in';
    
    const gradient = this._ctx.createRadialGradient(this._ballPosition.x, this._ballPosition.y, 0, this._ballPosition.x, this._ballPosition.y, radius);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, .5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this._ctx.fillStyle = gradient;

    this._ctx.beginPath();
    this._ctx.arc(this._ballPosition.x, this._ballPosition.y, radius, 0, 2 * Math.PI);
    this._ctx.fill();

    this._ctx.globalCompositeOperation = 'source-over';
  }

    _createBackgroundImages() {      
        for (let i = 0; i < this._imagePurple.length; i++) {
            this._ctx.drawImage(this._imagePurple[i], this._imagePositions[i].x - (this._imagePurple[i].width/2), this._imagePositions[i].y - (this._imagePurple[i].height/2));
        }
    }

  _createBackgroundImagesLayer() {
    for (let i = 0; i < this._imageOrange.length; i++) {
        this._ctx.drawImage(this._imageOrange[i], this._imagePositions[i].x - (this._imageOrange[i].width/2), this._imagePositions[i].y - (this._imageOrange[i].height/2));
    }
  }

  _updatePositions(e) {
    if(!this._mousePosition) return;

        this._ballPosition = {
            x: Lerp.lerp(this._ballPosition.x, this._mousePosition.x, 0.2),
            y: Lerp.lerp(this._ballPosition.y, this._mousePosition.y, 0.2)
        };
  }

  _setupEventListener() {
    TweenLite.ticker.addEventListener('tick', this._tickHandler);

    window.addEventListener('resize', this._resizeHandler);

    window.addEventListener('mousemove', this._mousemoveHandler);
  }

  _tickHandler() {
    this._draw();
  }

  _resizeHandler() {
    this._resize();
  }

  _mousemoveHandler(e) {
    this._mousePosition = {
      x: e.clientX,
      y: e.clientY
    }
  }

}


export default new InteractiveBackgroundComponent();