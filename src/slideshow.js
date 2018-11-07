
export function slideIt(){

let present = 	document.getElementById('presentation');

present.addEventListener('click', function(){
	let presentElem;
	alert('inside full screen');
	let elem = document.getElementsByClassName('toggleDiv');
	for(let i=0; i<elem.length; i++)
	{
		if(elem[i].style.display==='block')
		{
			presentElem = elem[i];
		}
	}

	presentElem.webkitRequestFullscreen();

// var slides = document.querySelectorAll('#cont .toggleDiv');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,1000);

// function nextSlide(){
// 	slides[currentSlide].className = 'slide';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'slide showing';
// }
// if (elem.webkitFullscreenElement) {
// 	alert('true');
// }
// document.addEventListener('keydown',  present);
//  function present(event) {
	 
// 	var count = 0;
// 	let slides = document.getElementsByClassName("toggleDiv");
//     if (event.defaultPrevented) {
//         return;
//     }

//     var key = event.key || event.keyCode;

//     if (key === "ArrowRight") {
// 		console.log("right key clicked")
// 		count++;
// 		for(let i =0;i<slides.length; i++)
// 		{
// 			slides[i].style.display="none";

// 		}
// 		slides[count].style.display="block";
// 	}
	
// 	if (key === "ArrowLeft") {
// 		console.log("right key clicked")
// 		count--;
// 		for(let i =0;i<slides.length; i++)
// 		{
// 			slides[i].style.display="none";

// 		}
// 		slides[count].style.display="block";
// 	}
// 	if (key === "Escape") {
// 		document.removeEventListener('keydown',present);
// 	}

	
// };

 })


	
}