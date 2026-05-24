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
        var maxThumbMove = 100 - 50; 
        thumb.style.left = `${percentage * maxThumbMove}%`;
    }
}
nextBtn.addEventListener('click', handleNextScroll);
prevBtn.addEventListener('click', handlePrevScroll);
track.addEventListener('scroll', handleIndicatorScroll);
          // selider section 2 started
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
        var maxThumbMove2 = 100 - 50; 
        thumb2.style.left = `${percentage2 * maxThumbMove2}%`;
    }
}
nextBtn2.addEventListener('click', NextScroll2);
prevBtn2.addEventListener('click', PrevScroll2);
Track2.addEventListener('scroll', Scroll2);
  // selider section 3 started
var Track3 = document.getElementById('carouselTrack3');
var prevBtn3 = document.getElementById('prevBtn3');
var nextBtn3 = document.getElementById('nextBtn3');
var thumb3 = document.getElementById('scrollThumb3');

var scrollAmount3 = 300; 


function NextScroll3() {
    Track3.scrollBy({
        left: scrollAmount3,
        behavior: 'smooth'
    });
}


function PrevScroll3() {
    Track3.scrollBy({
        left: -scrollAmount3,
        behavior: 'smooth'
    });
}


function Scroll3() {
    var maxScroll3 = Track3.scrollWidth - Track3.clientWidth;
    if (maxScroll3 > 0) {
        var percentage3 = Track3.scrollLeft / maxScroll3;
        var maxThumbMove3 = 100 - 50; 
        thumb3.style.left = `${percentage3 * maxThumbMove3}%`;
    }
}
nextBtn3.addEventListener('click', NextScroll3);
prevBtn3.addEventListener('click', PrevScroll3);
Track3.addEventListener('scroll', Scroll3);

 // selider section 4 started

var Track4 = document.getElementById('carouselTrack4');
var prevBtn4 = document.getElementById('prevBtn4');
var nextBtn4 = document.getElementById('nextBtn4');
var thumb4 = document.getElementById('scrollThumb4');

var scrollAmount4 = 300; 


function NextScroll4() {
    Track4.scrollBy({
        left: scrollAmount4,
        behavior: 'smooth'
    });
}


function PrevScroll4() {
    Track4.scrollBy({
        left: -scrollAmount4,
        behavior: 'smooth'
    });
}


function Scroll4() {
    var maxScroll4 = Track4.scrollWidth - Track4.clientWidth;
    if (maxScroll4 > 0) {
        var percentage4 = Track4.scrollLeft / maxScroll4;
        var maxThumbMove4 = 100 - 50; 
        thumb4.style.left = `${percentage4 * maxThumbMove4}%`;
    }
}
nextBtn4.addEventListener('click', NextScroll4);
prevBtn4.addEventListener('click', PrevScroll4);
Track4.addEventListener('scroll', Scroll4);

// selider section 5 started

var Track5 = document.getElementById('carouselTrack5');
var prevBtn5 = document.getElementById('prevBtn5');
var nextBtn5 = document.getElementById('nextBtn5');
var thumb5 = document.getElementById('scrollThumb5');

var scrollAmount5 = 300; 


function NextScroll5() {
    Track5.scrollBy({
        left: scrollAmount5,
        behavior: 'smooth'
    });
}


function PrevScroll5() {
    Track5.scrollBy({
        left: -scrollAmount5,
        behavior: 'smooth'
    });
}


function Scroll5() {
    var maxScroll5 = Track5.scrollWidth - Track5.clientWidth;
    if (maxScroll5 > 0) {
        var percentage5 = Track5.scrollLeft / maxScroll5;
        var maxThumbMove5 = 100 - 50; 
        thumb5.style.left = `${percentage5 * maxThumbMove5}%`;
    }
}
nextBtn5.addEventListener('click', NextScroll5);
prevBtn5.addEventListener('click', PrevScroll5);
Track5.addEventListener('scroll', Scroll5);

// selider section 6 started

var Track6 = document.getElementById('carouselTrack6');
var prevBtn6 = document.getElementById('prevBtn6');
var nextBtn6 = document.getElementById('nextBtn6');
var thumb6 = document.getElementById('scrollThumb6');

var scrollAmount6 = 300; 


function NextScroll6() {
    Track6.scrollBy({
        left: scrollAmount6,
        behavior: 'smooth'
    });
}


function PrevScroll6() {
    Track6.scrollBy({
        left: -scrollAmount6,
        behavior: 'smooth'
    });
}


function Scroll6() {
    var maxScroll6 = Track6.scrollWidth - Track6.clientWidth;
    if (maxScroll6 > 0) {
        var percentage6 = Track6.scrollLeft / maxScroll6;
        var maxThumbMove6 = 100 - 50; 
        thumb6.style.left = `${percentage6 * maxThumbMove6}%`;
    }
}
nextBtn6.addEventListener('click', NextScroll6);
prevBtn6.addEventListener('click', PrevScroll6);
Track6.addEventListener('scroll', Scroll6);

// selider section 6 started

var Track7 = document.getElementById('carouselTrack7');
var prevBtn7 = document.getElementById('prevBtn7');
var nextBtn7 = document.getElementById('nextBtn7');
var thumb7 = document.getElementById('scrollThumb7');

var scrollAmount7 = 300; 


function NextScroll7() {
    Track7.scrollBy({
        left: scrollAmount7,
        behavior: 'smooth'
    });
}


function PrevScroll7() {
    Track7.scrollBy({
        left: -scrollAmount7,
        behavior: 'smooth'
    });
}


function Scroll7() {
    var maxScroll7 = Track7.scrollWidth - Track7.clientWidth;
    if (maxScroll7 > 0) {
        var percentage7 = Track7.scrollLeft / maxScroll7;
        var maxThumbMove7 = 100 - 50; 
        thumb7.style.left = `${percentage7 * maxThumbMove7}%`;
    }
}
nextBtn7.addEventListener('click', NextScroll7);
prevBtn7.addEventListener('click', PrevScroll7);
Track7.addEventListener('scroll', Scroll7);