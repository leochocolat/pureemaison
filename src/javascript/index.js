//IMPORTS

//COMPONENT
import InteractiveBackgroundComponent from './components/InteractiveBackgroundComponent.js';


//MODULES
import onLoadModule from './modules/onLoadModule.js';

let logMessageStyles = [
    'background: linear-gradient(#8BA3FF, #5BBAFF)',
    'border-radius: 15px 15px',
    'color: white',
    'display: block',
    'font-family: arial',
    'font-size: 14px',
    'padding: 12px 11px',
    'margin: 10px 0 20px 0',
    'text-align: center',
].join(';');
let logEmojiStyles1 = [
    'padding: 20px 20px',
    'background:url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/potato_1f954.png) no-repeat',
    'background-size: 100%',
    'background-position: center'
].join(';');
let logEmojiStyles2 = [
    'display: block',
    'padding: 15px 20px',
    'background:url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/white-smiling-face_263a.png) no-repeat',
    'background-size: 100%',
    'background-position: center',
].join(';');
let logisWriting = [
    'display: block',
    'padding: 15px 30px',
    'background:url(https://media1.tenor.com/images/a931cb6641ce46279cb84d4d65dcaf6a/tenor.gif?itemid=14397514) no-repeat',
    'background-size: cover',
    'background-position: center',
].join(';');


let loged = false;

window.addEventListener('resize', listenConsole);

function listenConsole() {
    if ((window.outerHeight - window.innerHeight) > 100 || (window.outerWidth - window.innerWidth) > 100) {
        if (loged == true) return;
        loged = true;
        setTimeout(function() {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
            console.log('%c ', logisWriting);
        }, 1000);
        setTimeout(function() {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
            console.log('%c Hello Purée Maison, Bon décorticage...', logMessageStyles);
        }, 3000);
        setTimeout(function() {
            console.log('%c ', logEmojiStyles1);
        }, 4000);
        setTimeout(function() {
            console.log('%c ', logEmojiStyles2);
        }, 3500);
    } else {
        console.clear();
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        loged = false;     
    }
}
