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




// #Breadcrumb

document.getElementById("breadcrumb_text").textContent = "StanzaLiving / " + individualData.product.cityName + " / " + individualData.product.name;




// Carousel
let slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
    plusSlides(1);
}, 3000); // Change interval here (3000 = 3 seconds)

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    if (slideIndex === 1) {
        prev.style.display = "none";
    } else {
        prev.style.display = "flex";
    }
    if (slideIndex === slides.length) {
        next.style.display = "none";
    } else {
        next.style.display = "flex";
    }
}


document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
});


// Carousel Images
document.getElementById("img_1").src = individualData.product.images[0].imageUrl;
document.getElementById("img_2").src = individualData.product.images[1].imageUrl;
document.getElementById("img_3").src = individualData.product.images[2].imageUrl;
document.getElementById("img_4").src = individualData.product.images[3].imageUrl;
document.getElementById("img_5").src = individualData.product.images[4].imageUrl;


// Appending house details
document.getElementById("house_name").textContent = individualData.product.name;
document.getElementById("gender").textContent = individualData.product.genderName;
document.getElementById("full_addr").textContent = individualData.product.addressResponseDTO.displayAddress;
document.getElementById("price").textContent = individualData.product.startingPrice;


// occupacy append

let occupacy = individualData.product.residenceOccupancies;

let appendOccupancy = () => {
    let appendOccupy = document.getElementById("occupy_append");
    appendOccupancy.textContent = "";
    occupacy.forEach(element => {
        let card = document.createElement("div");

        let h5 = document.createElement("h4");
        h5.textContent = element.occupancyName;

        let h6 = document.createElement("h5");
        h6.textContent = "₹" + element.startingPrice + "/mo*";

        card.append(h5, h6);
        card.setAttribute("class", "occupyCard");
        appendOccupy.append(card);
    });
}

appendOccupancy();


// Append amenities
let features = individualData.product.features;
let amenities = () => {
    let amenities = document.getElementById("amenities_append");
    amenities.textContent = "";
    features.forEach(element => {
        let p = document.createElement("P");
        p.textContent = element.name;

        amenities.append(p);
    });
}

amenities();


// Append Services
let servicesArr = individualData.product.facilities;
let services = () => {
    let serviceAppend = document.getElementById("services_append");
    serviceAppend.textContent = "";
    servicesArr.forEach(element => {
        let p = document.createElement("P");
        p.textContent = element.name;

        serviceAppend.append(p);
    });
}

services();

document.getElementById("desc_text").textContent = individualData.product.seoDescription;