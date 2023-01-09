let change = document.querySelectorAll(".date");
let slotes = document.querySelectorAll(".slote");
change[0].addEventListener("click", function() {
    change[1].style.border = "1px solid #e1e1e1";
    change[0].style.border = "1px solid #60c3ad";
    change[0].style.background = "#ddf2f5";
    change[1].style.background = "white";
    change[2].style.background = "white";
    change[2].style.border = "1px solid #e1e1e1";
    
})
change[1].addEventListener("click", function() {
    change[0].style.border = "1px solid #e1e1e1";
    change[1].style.border = "1px solid #60c3ad";
    change[1].style.background = "#ddf2f5";
    change[0].style.background = "white";
    change[2].style.background = "white";
    change[2].style.border = "1px solid #e1e1e1";
})
change[2].addEventListener("click", function() {
    change[0].style.border = "1px solid #e1e1e1";
    change[2].style.border = "1px solid #60c3ad";
    change[2].style.background = "#ddf2f5";
    change[1].style.background = "white";
    change[0].style.background = "white";
    change[1].style.border = "1px solid #e1e1e1";

})

slotes[0].addEventListener("click", function() {
    slotes[1].style.border = "1px solid #e1e1e1";
    slotes[0].style.border = "1px solid #60c3ad";
    slotes[0].style.background = "#ddf2f5";
    slotes[1].style.background = "white";
    slotes[2].style.background = "white";
    slotes[3].style.background = "white";
    slotes[2].style.border = "1px solid #e1e1e1";
    slotes[3].style.border = "1px solid #e1e1e1";
    
})
slotes[1].addEventListener("click", function() {
    slotes[0].style.border = "1px solid #e1e1e1";
    slotes[1].style.border = "1px solid #60c3ad";
    slotes[1].style.background = "#ddf2f5";
    slotes[0].style.background = "white";
    slotes[2].style.background = "white";
    slotes[3].style.background = "white";
    slotes[2].style.border = "1px solid #e1e1e1";
    slotes[3].style.border = "1px solid #e1e1e1";
})
slotes[2].addEventListener("click", function() {
    slotes[0].style.border = "1px solid #e1e1e1";
    slotes[2].style.border = "1px solid #60c3ad";
    slotes[2].style.background = "#ddf2f5";
    slotes[1].style.background = "white";
    slotes[0].style.background = "white";
    slotes[3].style.background = "white";
    slotes[1].style.border = "1px solid #e1e1e1";
    slotes[3].style.border = "1px solid #e1e1e1";

})
slotes[3].addEventListener("click", function() {
    slotes[0].style.border = "1px solid #e1e1e1";
    slotes[2].style.border = "1px solid #e1e1e1";
    slotes[2].style.background = "white";
    slotes[1].style.background = "white";
    slotes[0].style.background = "white";
    slotes[3].style.background = "#ddf2f5";
    slotes[1].style.border = "1px solid #e1e1e1";
    slotes[3].style.border = "1px solid #60c3ad";


})
document.querySelectorAll(".close_btn")[0].addEventListener("click", function () {
    document.getElementById("parent").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
  document.querySelectorAll(".close_btn")[1].addEventListener("click", function () {
    document.getElementById("parent").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
  document.getElementById("UnlockDiscount").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "block";
    document.getElementById("ScheduleAvisits").style.background = "white";
    document.getElementById("ScheduleAvisits").style.color = "#c5c5c5";
    
  });
  document.getElementById("ScheduleAvisits").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("UnlockDiscount").style.background = "white";
    document.getElementById("UnlockDiscount").style.color = "#c5c5c5";
  });