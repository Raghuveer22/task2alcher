var button1=document.querySelector(".btn-1");
var button2=document.querySelector(".btn-2");
var mainText=document.querySelector(".title .heading");
button1.addEventListener("click",function(){
    mainText.innerText="You've clicked the button-1";
});
button2.addEventListener("click",function(){
    mainText.innerText="You've clicked the button-2";
});