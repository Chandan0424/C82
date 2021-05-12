mouseevent="";
lastpoSX=0;
lastpoSY=0;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthOfLine=1;

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    color=document.getElementById("Color").value;
    widthOfLine=document.getElementById("Width").value;
    mouseevent="MouseDown";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove",myMouseMove);

function myMouseMove(e){
    currentposX=e.clientX-canvas.offsetLeft;
    currentposY=e.clientY-canvas.offsetTop;

    if(mouseevent=="MouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;

        
        ctx.arc(currentposX,currentposY,10,0,2*Math.PI);
        ctx.stroke();
    }
    lastpoSX=currentposX;
    lastpoSY=currentposY;
}

canvas.addEventListener("mouseleave",myMouseLeave);

function myMouseLeave(e){
    mouseevent="MouseLeave";
    console.log(mouseevent);
}

canvas.addEventListener("mouseup",myMouseUp);

function myMouseUp(e){
    mouseevent="MouseUp";
    console.log(mouseevent);
}

function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}