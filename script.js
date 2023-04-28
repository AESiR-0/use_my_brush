const canvas = document.getElementById('canvas');
const ctx  = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', ()=> {canvas.width=window.innerWidth;
canvas.heigt=window.innerHeight;})

const mouse ={
    x : undefined,
    y : undefined,
};

var keyPress=false;
var erasePress=false;
window.addEventListener('keydown',(event)=>{
    if (event.key === 'b'){
        keyPress=true;   
        erasePress=false;    
    }
        
    else if (event.key === 'e'){
        erasePress=true;
        keyPress=false;
        };
    } );

canvas.addEventListener('mousemove',(event)=>{
    if (keyPress == true){
    mouse.x=event.x;
    mouse.y=event.y;
    drawCircle();
}
    if (erasePress == true){
    mouse.x=event.x;
    mouse.y=event.y;
    eraser();
}});


function drawCircle(){
    console.log( 'drawing circle');
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,40,0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha=0.5;
}

function  eraser(){
    
    ctx.fillStyle='black';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
    ctx.fill();
}

// function  animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     drawCircle();
//     requestAnimationFrame(animate);
// }

// animate();