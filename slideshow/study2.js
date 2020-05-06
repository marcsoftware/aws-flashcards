//file:///C:/Users/marc/Desktop/guide/notes/microservices.note
window.onload=parse;



// requires folder name
var output;
var slides;
var total;
function parse(){
     
    document.getElementById("output").addEventListener("mousedown", nextSlide); 
    slides=text.split('<br>');
    
    total=slides.length-1;
    draw();
   
}

function parseHeaders(){
   // output += slides[count].replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}



var count=0;
function draw(){

   output = slides[count].replace(/(.*\.jpg|.*\.gif)/g,`<p class="label">$1<img src="${folder_name}/$1" /></p>`);
   
   parseHeaders();

   document.getElementById('output').innerHTML=output;

}

function nextSlide(){
    count++;
    if(count==total){
        alert('you won');
    }
    draw();
    document.title=count+'/'+total;
}

function prevSlide(){
    count--;
    if(count==total){
        alert('you won');
    }
    draw();
    document.title=count+'/'+total;
}