function showdiv(){
    var hidediv=document.getElementById("hiddendiv");
    hidediv.hidden=false
}
function hidediv(){
    var hidediv=document.getElementById("hiddendiv");
    hidediv.hidden=true;
}
function showdiv2(){
    var hidediv=document.getElementById("hiddendiv2");
    hidediv.hidden=false;
}
function hidediv2(){
    var hidediv=document.getElementById("hiddendiv2")
    hidediv.hidden=true;
};
var heroimg1="./herosectionimage.jpg";
var heroimg2="./heroimage2.jpg";
var heroimg3="./heroimage3.jpg";
var heroimg4="./heroimage4.jpg";


function heroimagearrow(){
    var image=document.getElementById("heroimage");
    
    if(image.src.includes("herosectionimage.jpg")){
        image.src=heroimg2
    }else if(image.src.includes("heroimage2.jpg")){
         image.src=heroimg4
    }else if(image.src.includes("heroimage4.jpg")){
         image.src=heroimg3
    }else{
        image.src=heroimg1
    }

   
}
function heroimgarrowleft(){
    var image=document.getElementById("heroimage");

    if(image.src.includes("heroimage2.jpg")){
         image.src=heroimg1
    }else if(image.src.includes("heroimage4.jpg")){
        image.src=heroimg2
    }else if(image.src.includes("heroimage3.jpg")){
        image.src=heroimg4
    }else if(image.src.includes("herosectionimage.jpg")){
        image.src=heroimg3
    }else if(image.src.includes("heroimage3.jpg")){
        image.src=heroimg4
    }else if(image.src.includes("heroimage4.jpg")){
        image.src=heroimg2
    }else if(image.src.includes("heroimage3.jpg")){
        image.src=heroimg1
    }
}
        // selider section started
var track = document.getElementById('carouselTrack');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var thumb = document.getElementById('scrollThumb');

var scrollAmount = 300; 


function handleNextScroll() {
    track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}


function handlePrevScroll() {
    track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}


function handleIndicatorScroll() {
    var maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll > 0) {
        var percentage = track.scrollLeft / maxScroll;
        var maxThumbMove = 100 - 60; 
        thumb.style.left = `${percentage * maxThumbMove}%`;
    }
}
nextBtn.addEventListener('click', handleNextScroll);
prevBtn.addEventListener('click', handlePrevScroll);
track.addEventListener('scroll', handleIndicatorScroll);
          // selider section started
var Track2 = document.getElementById('carouselTrack2');
var prevBtn2 = document.getElementById('prevBtn2');
var nextBtn2 = document.getElementById('nextBtn2');
var thumb2 = document.getElementById('scrollThumb2');

var scrollAmount2 = 300; 


function NextScroll2() {
    Track2.scrollBy({
        left: scrollAmount2,
        behavior: 'smooth'
    });
}


function PrevScroll2() {
    Track2.scrollBy({
        left: -scrollAmount2,
        behavior: 'smooth'
    });
}


function Scroll2() {
    var maxScroll2 = Track2.scrollWidth - Track2.clientWidth;
    if (maxScroll2 > 0) {
        var percentage2 = Track2.scrollLeft / maxScroll2;
        var maxThumbMove2 = 100 - 60; 
        thumb2.style.left = `${percentage2 * maxThumbMove2}%`;
    }
}
nextBtn2.addEventListener('click', NextScroll2);
prevBtn2.addEventListener('click', PrevScroll2);
Track2.addEventListener('scroll', Scroll2);
