let slide = [...document.querySelectorAll('.slide')]
let slideHinner = document.querySelector('.slideHinner');
let container = document.querySelector('.containerSlide');
let button = document.querySelector('.button');
let progressBar = document.querySelector('.progress_bar');
let containerWidth;
let sliderWidth;
let current = 0;
let target = 0;
let ease =.05;



//container.setAttribute('width',slide.length*slide[0].getBoundingClientRect().width);
function calculContainerWidth(){
    let size = 0;
    slide.forEach(element => {
        size += element.getBoundingClientRect().width;
    });
    return size;
}


function lerp(start,end,t){
    return start * (1-t) + end * t;
}

function setTransform(el,transform){
    el.style.transform = transform;
}

function init(){
    containerWidth = calculContainerWidth();
    sliderWidth = containerWidth / slide.length;
    document.body.style.height = `${containerWidth - (window.innerWidth - window.innerHeight)}px`;
    console.log("on resize");
}

let cpt = 0;
function animate(){
    
    button.addEventListener("click", function(){
        window.scrollTo(0,parseFloat(sliderWidth));
    });
    target = window.scrollY;
    let largeur = document.documentElement.scrollHeight - containerWidth
    let position = window.scrollY
    let barre = position / window.innerHeight * largeur
    if (current > target){
        current -= parseFloat(sliderWidth);
        cpt--;
    }
    if(current < target){
        current += parseFloat(sliderWidth);
        cpt++;
    }
    setTransform(container,`translateX(-${current}px)`);
    progressBar.style.width = (sliderWidth*cpt)+(current/(slide.length-1))+"px"
    
    requestAnimationFrame(animate);
}




init();
animate();
window.onresize = init;


/******************************* utilisation de l'orientation des téléphone pour ajouter les règles css adéquat *****************************************/

let style = `
     
  .presentation{
    display: grid;
    grid-template-areas: 
    "titre"
    "image"
    "texte";
  }
  .svg{
    color: white;
  }
  .presentation > h2 {
    font-size: 400%;
    margin-left: 0%;
    
    margin-bottom: 0%;
    text-align: center;
    margin: auto;
  }

  .presentation > p {
    grid-area: texte;
    font-size: 250%;
    margin: auto;
    margin-left: 0%;
    margin-top: -2%;
    width: 90%;
    margin: auto;
    position: relative;
    z-index: 5;
  }
  
  .presentation > .img-non-visible{
    opacity: 0;
    transform: translateX(0px);
    grid-area: image;
    position: relative;
    z-index: 5;
    margin: auto;
    padding: 0;
  }
  .presentation > .img-visible{
    opacity: 1;
    transform: translateX(0px);
    transition: 1.5s;
    position: relative;
    z-index: 5;
    
  }
  
  .texte-non-visible{
    opacity: 0;
    transform: translateX(-5px);
  }
  
  .texte-visible{
    position: relative;
    z-index: 8;
    opacity: 1;
    transform: translateX(0px);
    transition: 2s;
    color: rgb(216, 216, 216);
  }

`
/*
let stylesheet2 = document.createElement("style")
stylesheet2.nodeType = "text/css"
stylesheet2.innerText = style

if(window.matchMedia('(max-width:1080)').matches){
    if(screen.orientation.angle == 0){
        console.log("angle screen : "+screen.orientation.angle);
        document.head.appendChild(stylesheet2)
    }
    else{
        document.head.removeChild(stylesheet2)
    }
    init();
}
window.addEventListener("orientationchange", function(event){
    if(event.target.screen.orientation.angle == 0){
        console.log("angle screen : "+event.target.screen.orientation.angle);
        document.head.appendChild(stylesheet2)
    }
    else{
        document.head.removeChild(stylesheet2)
    }
    init();
})
*/


