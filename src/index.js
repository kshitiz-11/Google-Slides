import './presentation.js';
import { addTextObject} from './TextObject.js';

import { addImageObject} from './ImageObject.js';

import { createNewSlide,displayCanvas, mapX } from './NewSlides';

window.onload=function (){
    addTextObject(mapX);
    addImageObject(mapX);
    createNewSlide();
    displayCanvas();
    
 }