let click  = document.querySelectorAll(".btn");
click[0].addEventListener("click",function(){
  console.log("test");
  document.getElementById("parent").style.display="flex";
  document.querySelector("body").style.overflow= "hidden";
});
click[1].addEventListener("click",function(){
  console.log("test");
  document.getElementById("parent").style.display="flex";
  document.querySelector("body").style.overflow= "hidden";
});
click[2].addEventListener("click",function(){
  console.log("test");
  document.getElementById("parent").style.display="flex";
  document.querySelector("body").style.overflow= "hidden";
});
  
document.getElementById("close").addEventListener("click",function() {
  document.getElementById("parent").style.display="none";
  document.querySelector("body").style.overflow= "auto";
})
    
document.getElementById("parent").addEventListener("click",function() {
  document.getElementById("parent").style.display="none";
  document.querySelector("body").style.overflow= "auto";
})
    
        
  
