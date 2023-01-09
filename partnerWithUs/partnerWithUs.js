import { navComponent, footerComponent } from "../components/searchbox.js";


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
let namee  =  document.querySelectorAll("#nameContainer input");
let tele = document.querySelector("#phoneNumber input");
let emails = document.querySelector("#emailId input");
let CheckBox = document.getElementById("flexCheckDefault");
function colorChange(){
  
    console.log(namee[0].value,namee[1].value);
    if(namee[0].value!="" && namee[1].value!="" && tele.value!="" && emails.value!="" &&CheckBox.checked){
        document.getElementById("Submit").style.background = "#60c3ad";
    }
    else{
      document.getElementById("Submit").style.background = "#cbcdcd";
    }
}
   namee[0].addEventListener("input",colorChange);   
   namee[1].addEventListener("input",colorChange); 
   tele.addEventListener("input",colorChange);
   emails.addEventListener("input",colorChange);
   CheckBox.addEventListener("input",colorChange);
  
   document.getElementById("nav").innerHTML = navComponent;
   document.querySelector("footer").innerHTML = footerComponent;