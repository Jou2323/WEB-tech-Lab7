let elem = document.getElementById('elem');
let flag = true;
elem.onclick = function() {
if(flag){
flag=false;
elem.style.color = 'white';
elem.style.background = 'blue';
}
else if(!flag){
flag=true;
elem.style.color = 'black';
elem.style.background = 'white';
}
 }
 
let elem2 = document.querySelector('li');
let flag2 = true;
elem2.style.color = 'red';

elem2.onclick = function() {
if(flag2){
flag2=false;
elem2.style.color = 'red';
elem2.style.background = 'white';
}
else if(!flag2){
flag2=true;
elem2.style.color = 'white';
elem2.style.background = 'green';
}
 }
 

function addimage() { 
  var img =  new Image(); 
  img.src = "https://www.private-prague-guide.com/wp-content/uploads/Fotolia_134992329_Berlin.jpg"; 
  img.width = 250
  img.id = 'town'
  document.body.appendChild(img);
}
function deleteimage() { 
  var img = document.getElementById("town");
  document.body.removeChild(img);
}
function zoomin(){
      var myImg = document.getElementById("town");
      var currWidth = myImg.clientWidth;
      if(currWidth == 500){
          alert("Maximum zoom-in level reached.");
      } else{
          myImg.style.width = (currWidth + 50) + "px";
      } 
  }
  function zoomout(){
      var myImg = document.getElementById("town");
      var currWidth = myImg.clientWidth;
      if(currWidth == 50){
          alert("Maximum zoom-out level reached.");
      } else{
          myImg.style.width = (currWidth - 50) + "px";
      }
  }


