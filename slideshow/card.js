//file:///C:/Users/marc/Desktop/guide/notes/microservices.note
window.onload=parse;



// requires folder name
var output;
var slides;
var total;
function parse(){
     
    document.getElementById("output").addEventListener("mousedown", nextSlide); 
    slides=text.split('<br>');
     slides = slides.filter(function (el) {
  return el != null && el.match(/[a-z]/g);
});

     
    shuffle(slides);

    total=slides.length-1;
    draw();
   
}

function parseHeaders(){
   // output += slides[count].replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}



var count=0;
function draw(){
 console.log(slides[count]);
   output = slides[count].replace(/(.*\.jpg|.*\.gif)/g,`<p class="label">$1<img src="${folder_name}/$1" /></p>`);

   output=output.split('|')[0];
   output=output.replace(/[\r\n]/g,'');
   parseHeaders();
   var words = slides[count].replace(/(.*\.jpg|.*\.gif)/g,``);

   var letters = words;
   letters=letters.replace(/\d/g,"#");
    letters = words.match(/\b[a-zA-Z\#\-\(\)]/g); //get first letter of each word
   
   document.getElementById('output').innerHTML=output;
   document.getElementById('letters').innerHTML=letters.join(' ');
   document.getElementById('words').innerHTML=words;

}

function nextSlide(){
    count++;
    if(count>total){
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


function shuffle(a) {




    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}