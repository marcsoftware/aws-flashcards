//file:///C:/Users/marc/Desktop/guide/notes/microservices.note
window.onload=parse;



// requires folder name
var output;
var slides;
var total;

//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------
function parse(){
     
    //document.getElementById("output").addEventListener("mousedown", nextSlide); 
    slides=text;
    
    

    draw();
   
}

//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------
function parseHeaders(){
   // output += slides[count].replace(/(\d+\.\ .*\n)/g,'<h1>$1</h1>');    

}


//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------
var count=0;
function draw(){

   output = slides;
   
   parseHeaders();

   document.getElementById('output').innerHTML=output;

}

//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------

function update(id,handle){
    var task =handle.value; 
    handle.style["background-color"] = "Azure"; 
    handle.style["color"] = "Black";  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //alert(xhttp.responseText);
        }
    };
    xhttp.open("GET", "sql/update.php?id="+id+"&task="+task, true);
    xhttp.send();



}


//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------

function handlePaste(e,id){
    getBlobFromClipboard(e,id);
}


//------------------------------------------------------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------------------------------------------------------
// id is the id of the html element to redner the picture at.
 function getBlobFromClipboard(event,id){
        var items = (event.clipboardData || event.originalEvent.clipboardData).items;
        var template= ` <img src="PATH" > `;

        for (index in items) {
            var item = items[index];
            
            if (item.kind === 'file') {
                var blob = item.getAsFile();
                var reader = new FileReader();
                
                reader.onload = function(event){
                    console.log('dataurl line 73 '+event.target.result)
                    document.getElementById(id).setAttribute('src', event.target.result); // render the image
                    call(event.target.result,id); // call to update pictur ein database
                }; // data url!
                

                reader.readAsDataURL(blob);
            }  
        }

}




//------------------------------------------------------------------------------------------------------------------------------
// random 
//------------------------------------------------------------------------------------------------------------------------------
  function makeID() {
    var length=12;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


//------------------------------------------------------------------------------------------------------------------------------
// TODO change this function to update the picture
// id is the id in the mysql-tale
// imgbase64 is the image
//------------------------------------------------------------------------------------------------------------------------------

function  call(imgBase64,id) {
    this.imgBase64=imgBase64;
   // var imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCA..."; //your bse64 image
   var randomID=this.makeID()+'.jpg';

    const file = this.DataURIToBlob(this.imgBase64)  
    var formData = new FormData();
    formData.append('image', file, randomID)  // 
    
    formData.append('path', 'temp/') //other param



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById(id).innerHTML = this.responseText;
       console.log(this.responseText);
        

        

      }
    };

    xhttp.onerror = function() {
      alert("ERROR");
    };

   
    //formData.append('video', this.video.nativeElement.value); // name of the video indatabase
    formData.append('imageID', randomID); // randomID is the name of the image file
    formData.append('id', id); // id of the record in the database
    

    xhttp.open("POST", "sql/uploadImage.php", true); // 
    xhttp.send(formData);
  }




//------------------------------------------------------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------------------------------------------------------

function DataURIToBlob(dataURI) {

    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }