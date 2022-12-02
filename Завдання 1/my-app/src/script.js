const elem = document.getElementById('elem');
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
 
const elem2 = document.querySelector('li');
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
 
