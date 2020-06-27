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
    var task =handle.value; 
    handle.style["background-color"] = "Azure"; 
    handle.style["color"] = "Black";  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           alert(xhttp.responseText);
        }
    };
    xhttp.open("GET", "sql/update.php?id="+id+"&task="+task, true);
    xhttp.send();



}

function handlePaste(e,id){
    getBlobFromClipboard(e,id);
}

// id is the id of the html element to redner the picture at.
 function getBlobFromClipboard(event,id){
        var items = (event.clipboardData || event.originalEvent.clipboardData).items;
        var template= ` <img src="PATH" > `

        for (index in items) {
            var item = items[index];
            
            if (item.kind === 'file') {
                var blob = item.getAsFile();
                var reader = new FileReader();
                
                reader.onload = function(event){
                    console.log('dataurl line 73 '+event.target.result)
                    document.getElementById(id).setAttribute('src', event.target.result);
                }; // data url!
                

                reader.readAsDataURL(blob);
            }  
        }

}


