var count = 1;
export var mapX = {"1":"canvas"};
var canvasValue = 1001;
export function createNewSlide()
{
alert('inside new slide')
let add = document.getElementById('add');
add.addEventListener('click', function(e){   
    count++;
    canvasValue++;
    // let canvas = document.createElement("div");
    // canvas.setAttribute('id', canvas);
    let slideBar = document.getElementById("slideBar");
    
    let slideNo = document.createElement("div");
    slideNo.innerText=count;
    slideNo.setAttribute("id", count);
    slideNo.setAttribute("class", "slideNo");
    slideBar.appendChild(slideNo);
    //map.count = canvasValue;
    mapX[count] = canvasValue;

    let canvas = document.createElement("div");
    
    canvas.setAttribute("id", canvasValue);
       canvas.setAttribute("class", "clearfix canvas toggleDiv");
       let container = document.getElementById('cont');
       container.appendChild(canvas);
    
    let defaultSlide = document.getElementById('1');
    defaultSlide.addEventListener('click', loadCanvas);

    slideNo.addEventListener('click', loadCanvas);

    function loadCanvas(e)
    {
        let mCanvas = document.getElementsByClassName("toggleDiv")
        for(let i =0; i< mCanvas.length; i++)
        {
          let canvas = mCanvas[i];
          canvas.style.display="none";
        }

       let targetId =  e.target.id;
       let canvas = document.getElementById(mapX[targetId]);
       canvas.style.display="block";

    }


   
       
    //    canvas.style="display:block"; 

})
}

export function displayCanvas()
{
    alert('inside display canvas');
    let slideNo = document.getElementsByClassName("slideNo");

 for(let i =0; i< slideNo.length; i++)
 {

    // let currentSLide = slideNo[i];
    // currentSLide.addEventListener('click', function(e){   
       
    //     let mCanvas = document.getElementsByClassName("toggleDiv")
    //     for(let i =0; i< mCanvas.length; i++)
    //     {
    //       let canvas = mCanvas[i];
    //       canvas.style = "display:none"  
    //     }

    //    let targetId =  e.target.id;
    //    let canvas = document.getElementById(targetId);
    //    canvas.style = "display:''";

    
    // })
 }
    

}