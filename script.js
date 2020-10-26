var contentEle = document.body.querySelector(".content");
var buttonEle = document.body.querySelector(".button");

function makeHome(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="Home Page"
  contentEle.appendChild(headEle);
} 
function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About page";
  contentEle.appendChild(headEle);
} 
function makeInteract(){
  contentEle.innerHTML="";
var headEle = document.createElement("h1");
  headEle.innerHTML="Interact";
  contentEle.appendChild(headEle);
} 
function counter(number){
  var ele = document.createElement("div");
  ele.innerHTML=number;
}
for(var i=0; i<1; i++){
  counter("0");
}

document.body.querySelector(".homebutt").addEventListener("click", function(){
  makeHome();
})
document.body.querySelector(".aboutbutt").addEventListener("click", function(){
   makeAbout();
  var nameEle = document.createElement("h3");
  nameEle.innerHTML="Jorge Garcia";
  contentEle.appendChild(nameEle);
})
document.body.querySelector(".Interactbutt").addEventListener("click", function(){
  makeInteract();
})
document.body.querySelector(".cButton").addEventListener("click", function(){
  counter();
  var butEle = document.createElement("span");
  butEle.innerHTML=counter();
  buttonEle.appendChild(butEle).innerHTML=i+++" ";
})

makeHome();