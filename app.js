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