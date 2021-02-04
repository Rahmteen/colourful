
// const bodyTag = document.getElementsByTagName('BODY')[0];
function makeRed(){
    bodyTag.setAttribute('style', `background-color: red !important`, );
}

console.log('hello')
// document.getElementById('red').addEventListener('click', makeRed())

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('red').addEventListener('click', makeRed())
});

