//file:///C:/Users/marc/Desktop/guide/notes/microservices.note

// requires folder name
var output;
function parse(){

   
    output = text.replace(/(.*\.jpg|.*\.gif)/g,`<p class="label">$1<img src="${folder_name}/$1" /></p>`);
   parseHeaders();

   document.getElementById('output').innerHTML=output;
}

function parseHeaders(){
    output = output.replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}

window.onload=parse;