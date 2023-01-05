import { navComponent } from "./components/searchbox.js";

/*------------------ Animations / Dynamic css----------------------------*/


// Navbar animation
window.addEventListener('scroll', () => {
    var scrollPos = window.scrollY;
    var mobileNavbar = document.getElementById('mobile_navbar');
    var heroNavbar = document.getElementById("hero_nav_img");
    if (scrollPos > 0) {
        heroNavbar.style.display = "none";
        mobileNavbar.style.display = 'flex';
    } else {
        heroNavbar.style.display = "flex";
        mobileNavbar.style.display = 'none';
    }
});

// slide on click hero section
document.getElementById("slider_links_2").onclick = () => {
    let slide_link2 = document.getElementById("slider_links_2");
    let slide_link1 = document.getElementById("slider_links_1");

    slide_link2.href = "#sliding_img_2";
    slide_link2.style.border = "1px solid #61c3ae";

    slide_link1.style.border = "none";
}

document.getElementById("slider_links_1").onclick = () => {
    let slide_link2 = document.getElementById("slider_links_2");
    let slide_link1 = document.getElementById("slider_links_1");

    slide_link1.href = "#sliding_img_1";
    slide_link1.style.border = "1px solid #61c3ae";

    slide_link2.style.border = "none";
}

// sliding animation
let slidingflag = false;
function showSlidingAnimation() {
    if (slidingflag) {
        let slide_link2 = document.getElementById("slider_links_2");
        slide_link2.click();
        slidingflag = false;
    }
    else {
        let slide_link1 = document.getElementById("slider_links_1");
        slide_link1.click();
        slidingflag = true;
    }
}
let intervalId;
let showAnimation = true;

intervalId = setInterval(() => {
    if (showAnimation) {
        showSlidingAnimation();
    }
}, 2000);

let selectAnimationFlag = true;
document.querySelector(".select_property_type").addEventListener('click', () => {
    if (selectAnimationFlag) {
        showAnimation = false;
        document.querySelector(".down_angle").classList.add('rotate');
        document.querySelector(".down_angle").classList.remove('rotateBack');
        document.getElementById("select_options").style.display = "block";
        selectAnimationFlag = false;
    }
    else {
        showAnimation = true;
        document.querySelector(".down_angle").classList.add('rotateBack');
        document.getElementById("select_options").style.display = "none";
        document.querySelector(".down_angle").classList.remove('rotate');
        selectAnimationFlag = true;
    }
});

/*------------------ Animations / Dynamic css ----------------------------*/


// hero section pop-up

let ex_recidence_btn = document.getElementById("exlpore_residence_link");

ex_recidence_btn.onclick = () => {
    let popup = document.getElementById("explore_residence_popup");
    popup.style.display = "flex";
}


let getData = async (searchterm) => {
    let res = await fetch(`http://localhost:3000/${searchterm}`);
    let data = await res.json();

    console.log(data);
}

getData("chennai");