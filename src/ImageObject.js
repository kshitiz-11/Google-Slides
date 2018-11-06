import { makeResizableDiv} from './presentation.js';

//console.log("Hi");

CKEDITOR.on( 'instanceReady', function( ev )
{
    // alert("CKEditor is loaded");
    // var htmlElement = document.getElementById( 'cont' );
    // config.sharedSpaces = {
    //     top: htmlElement
    // };
});

var src;
export function addImageObject(mapX){

  console.log("inside text obj")  
 //alert("hi inside textobject");  

//  CKEDITOR.plugins.addExternal( 'sharedspace', './plugins/plugin.js', 'plugin.js' );
  
let textCursor = document.getElementById("file");
// let src = textCursor.addEventListener('change', loadFile)
// alert(src);

textCursor.addEventListener('change', function(e){

   alert('inside Imageobject');
    
    change_cursor();
    // =textCursor.onchange(loadFile(event))
    // alert(src);
    
    src = URL.createObjectURL(event.target.files[0]);
    alert(src);
    // <div  class='resizable'>
    //         <div class='resizers'>
    //           <div class='resizer top-left'></div>
    //           <div class='resizer top-right'></div>
    //           <div contenteditable="true" name="content" id="textBox" onblur="">This is some sample content.</div>
    //           <div class='resizer bottom-left'></div>
    //           <div class='resizer bottom-right'></div>
    //         </div>
    //       </div>
    for (var key in mapX) {
        if (mapX.hasOwnProperty(key)) {
            console.log(key + " -> " + mapX[key]);
            document.getElementById(mapX[key]).addEventListener('mousedown', createDivOnClick);
        }
    }
    
    //document.getElementById("canvas").addEventListener('mousedown', createDivOnClick);

})
    
    function createDivOnClick(e){

        let  original_mouse_x = e.pageX;
        let original_mouse_y = e.pageY;
        let parent = document.createElement("div");
        parent.setAttribute('class', 'resizable');
    
        let resizers = document.createElement("div");
        resizers.setAttribute("class","resizers clearfix");
    
        let child1 = document.createElement("div");
        child1.setAttribute('class', 'resizer top-left');
    
        let child2 = document.createElement("div");
        child2.setAttribute('class', 'resizer top-right');
    
        
        // var image = document.getElementById('output');
        // image.src = 
        let child3 = document.createElement("img");
        child3.setAttribute('id', 'output');
        child3.src = src;

        // let child3 = document.createElement("div");
        // child3.setAttribute('class', 'textBox');
        // child3.setAttribute('contenteditable','true')
        // CKEDITOR.inline(child3);
    
        let child4 = document.createElement("div");
        child4.setAttribute('class', 'resizer bottom-left');
    
        let child5 = document.createElement("div");
        child5.setAttribute('class', 'resizer bottom-right');
      
        let dragabbleDiv = document.createElement("div");
        dragabbleDiv.setAttribute('class', 'draggable');
        resizers.appendChild(dragabbleDiv);
        dragabbleDiv.innerHTML = "&nbsp;"
        
        let targetCanvas = e.target.id;
        alert(targetCanvas);
        let container = document.getElementById(targetCanvas);
    
        resizers.appendChild(child1);
        resizers.appendChild(child2);
        resizers.appendChild(child3);
        resizers.appendChild(child4);
        resizers.appendChild(child5);
        
        parent.appendChild(resizers);
    
        parent.style.left = original_mouse_x +  'px';
        parent.style.top = original_mouse_y + 'px';
        container.appendChild(parent);
        example_restore_cursor();
        makeResizableDiv();
      
        for (var key in mapX) {
            if (mapX.hasOwnProperty(key)) {
                console.log(key + " -> " + mapX[key]);
                document.getElementById(mapX[key]).removeEventListener('mousedown', createDivOnClick);
            }
        }
       // document.getElementById(targetCanvas).removeEventListener('mousedown', createDivOnClick);

    }
    
    var loadFile = function(event) {
        alert('inside load');
       return URL.createObjectURL(event.target.files[0]);
        
      };

    function change_cursor() {
   
        document.body.style.cursor = "move";
    }
    function example_restore_cursor() {
        document.body.style.cursor = 'default';
    }
    
    
   
}

// export function onPageload()
// {

//    alert("inside page load");
//     let parent = document.createElement("div");
//     parent.setAttribute('class', 'resizable title');

//     let resizers = document.createElement("div");
//     resizers.setAttribute("class","resizers clearfix");

//     let child1 = document.createElement("div");
//     child1.setAttribute('class', 'resizer top-left');

//     let child2 = document.createElement("div");
//     child2.setAttribute('class', 'resizer top-right');

    
//     let child3 = document.createElement("div");
//     child3.setAttribute('class', 'textBox');
//     child3.setAttribute('contenteditable','true')
//     child3.setAttribute('id','editor1' );
//     child3.innerText="Click to add title";
//     CKEDITOR.inline(child3);

//     let child4 = document.createElement("div");
//     child4.setAttribute('class', 'resizer bottom-left');

//     let child5 = document.createElement("div");
//     child5.setAttribute('class', 'resizer bottom-right');
  

//     let container = document.getElementById("canvas");

//     resizers.appendChild(child1);
//     resizers.appendChild(child2);
//     resizers.appendChild(child3);
//     resizers.appendChild(child4);
//     resizers.appendChild(child5);
    
//     parent.appendChild(resizers);

    
    
//     container.appendChild(parent);
    
//     makeResizableDiv();
    


// }
