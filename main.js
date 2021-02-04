const bodyTag = document.getElementsByTagName('BODY')[0];
function makeRed(){
    bodyTag.setAttribute('style', `background-color: red !important`, );
}
// function randomColor() {
//     return `rgb ${Math.floor(Math.random(0,255))} + ', ' + ${Math.floor(Math.random(0,255))} + ', ' +  ${Math.floor(Math.random(0,255))}`;
//   }

// const newColor = 'yellow'; 

console.log(newColor);
object.addEventListener("click", myScript);

var colors = ['green', 'orange', 'blue']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 30000);


// bodyTag.setAttribute('style', `background-color: red !important`, );
// bodyTag.setAttribute('style', `background: red !important`);