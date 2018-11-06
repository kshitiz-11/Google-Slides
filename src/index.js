import './presentation.js';
import { addTextObject} from './TextObject.js';



import { createNewSlide,displayCanvas, mapX } from './NewSlides';

window.onload=function (){
    addTextObject(mapX);
    
    createNewSlide();
    displayCanvas();
    
 }