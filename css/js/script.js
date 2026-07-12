window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>30){

nav.classList.add("shadow");

}

else{

nav.classList.remove("shadow");

}

});