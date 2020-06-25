//file:///C:/Users/marc/Desktop/guide/notes/microservices.note
window.onload=parse;



// requires folder name
var output;
var slides;
var total;
function parse(){
     
    //document.getElementById("output").addEventListener("mousedown", nextSlide); 
    slides=text;
    
    

    draw();
   
}

function parseHeaders(){
   // output += slides[count].replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}



var count=0;
function draw(){

   output = slides;
   
   parseHeaders();

   document.getElementById('output').innerHTML=output;

}

function update(id,handle){
    handle.style["background-color"] = "Azure"; 
    handle.style["color"] = "Black"; 

}

