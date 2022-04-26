let ratio = 0.1;

var OS = "OS inconnu"; 
if (navigator.userAgent.indexOf("Win") != -1) OS = "Windows"; 
if (navigator.userAgent.indexOf("Mac") != -1) OS =  "Macintosh"; 
if (navigator.userAgent.indexOf("Linux") != -1) OS =  "Linux"; 
if (navigator.userAgent.indexOf("Android") != -1) OS =  "Android"; 
if (navigator.userAgent.indexOf("like Mac") != -1) OS =  "iOS"; 


let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
   /* faire en sorte que l'annimation soit compatible mac et tablète peut etre règle css qui nécessite un 
   --webkit essayer plusieur classe css pour voir le quel conviendrai le mieux */





    const handleIntersectImg = function (entries,observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
           // console.log("visible");
            entry.target.classList.add('img-visible');
            observer.unobserve(entry.target);
        }

    });
    }
let observer = new IntersectionObserver(handleIntersectImg, options);
document.querySelectorAll('.img-non-visible').forEach(function (r) {
    observer.observe(r)
})

const handleIntersectText = function (entries,observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){

            entry.target.classList.add('texte-visible');
            observer.unobserve(entry.target);
        }

    });
}

let observerText = new IntersectionObserver(handleIntersectText, options);
document.querySelectorAll('.texte-non-visible').forEach(function (r) {
    observerText.observe(r)
});


const handleIntersectGeo = function (entries,observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('triangle-visible');
            observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('triangle-visible');
        }
    });
}
const handleIntersectGeo2 = function (entries,observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('triangle-visible2');
            observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('triangle-visible2');
            
        }
    });
}


let observerGeo = new IntersectionObserver(handleIntersectGeo, options);
document.querySelectorAll('.triangle').forEach(function (r) {
    observerGeo.observe(r)
});
let observerGeo2 = new IntersectionObserver(handleIntersectGeo2, options);
document.querySelectorAll('.triangle2').forEach(function (r) {
    observerGeo2.observe(r)
});
