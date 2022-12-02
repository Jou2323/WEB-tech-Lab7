import React from "react"

class Images extends React.Component {
  addimage (){ 
    var img =  new Image(); 
    img.src = "https://www.private-prague-guide.com/wp-content/uploads/Fotolia_134992329_Berlin.jpg"; 
    img.width = 250
    img.id = 'town'
    document.body.appendChild(img);
  }
   deleteimage (){ 
    var img = document.getElementById("town");
    document.body.removeChild(img);
  }
   zoomin (){
    var myImg = document.getElementById("town");
    var currWidth = myImg.clientWidth;
    if(currWidth === 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 50) + "px";
    } 
  }
   zoomout(){
    var myImg = document.getElementById("town");
    var currWidth = myImg.clientWidth;
    if(currWidth === 50){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 50) + "px";
    }
  }
  render() {
    
      return <p>
      <button onClick={this.addimage.bind(this)}>Adding</button>
      <button onClick={this.zoomin.bind(this)}>Zoom In</button>
      <button onClick={this.zoomout.bind(this)}>Zoom Out</button>
      <button onClick={this.deleteimage.bind(this)}>Delete</button>
    </p>
    }
  }

export default Images