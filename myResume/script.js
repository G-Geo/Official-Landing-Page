toggleNavMenu = () => {
    document.getElementById('navMenu').classList.toggle("showNavMenu")
}

let i = 0;
let images = [];
let time = 24000;

images[0] = document.getElementById('cody1');
images[1] = document.getElementById('cody2');
images[2] = document.getElementById('cody3');
images[3] = document.getElementById('cody4');





changeImg = () => {
   images[i].classList.toggle('showCody');
    setTimeout(function() {
   images[i].classList.toggle('showCody');
    if (i < images.length - 1){
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()", 1000);
    },time);
}

window.onload = changeImg();