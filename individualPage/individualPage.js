import { navComponent, footerComponent } from "../components/searchbox.js";

// Localstorage

let individualData = JSON.parse(localStorage.getItem("individual")) || {};


// Title
console.log(individualData.product);
document.title = individualData.product.seoTitle;

// Navbar appending
document.querySelector("header").innerHTML = navComponent;

// footer appending
document.getElementById("footer_holder").innerHTML = footerComponent;

let ex_recidence_btn = document.getElementById("exlpore_residence_link");

ex_recidence_btn.onclick = () => {
    let popup = document.getElementById("explore_residence_popup");
    popup.style.display = "flex";
}

document.getElementById("close_btn").onclick = () => {
    let popup = document.getElementById("explore_residence_popup");
    popup.style.display = "none";
}
