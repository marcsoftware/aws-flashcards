//file:///C:/Users/marc/Desktop/guide/notes/microservices.note
window.onload=parse;



// requires folder name
var output;
var slides;
var total;
function parse(){
     
     document.getElementById("output").addEventListener("mousedown", nextSlide); 

    slides=text.split('\n');
    total=slides.length;
    draw();
   
}

function parseHeaders(){
    output += slides[count].replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}



var count=1;
function draw(){
     output = slides[count].replace(/(.*\.jpg|.*\.gif)/g,`<p class="label">$1<img src="${folder_name}/$1" /></p>`);
   parseHeaders();

   document.getElementById('output').innerHTML=output;

}

function nextSlide(){
    count++;
    draw();
    document.title=count+'/'+total;
}