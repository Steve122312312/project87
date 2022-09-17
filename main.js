/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/


//Get rference of canvas created.
var canvas=  document.getElementById("myCanvas")
var ctx= canvas.getContext("2d")

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.
canvas.addEventListener("mousedown",myMousedown)


function myMousedown(e) {

mouseX = e.clientX-canvas.offsetLeft 
mouseY= e.clientY-canvas.offsetTop 

circle(mouseX,mouseY)


}


	function circle(mouseX,mouseY,e){
        
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
    }
