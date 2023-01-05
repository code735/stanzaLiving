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
<<<<<<< HEAD
    slide_link2.style.border = "2px solid white";
=======
    slide_link2.style.border = "2px solid #61c3ae";
>>>>>>> 756dd36e29bf023abf40e56eae419e0676ff11c1

    slide_link1.style.border = "none";
}

document.getElementById("slider_links_1").onclick = () => {
    let slide_link2 = document.getElementById("slider_links_2");
    let slide_link1 = document.getElementById("slider_links_1");

    slide_link1.href = "#sliding_img_1";
<<<<<<< HEAD
    slide_link1.style.border = "2px solid white";
=======
    slide_link1.style.border = "2px solid #61c3ae";
>>>>>>> 756dd36e29bf023abf40e56eae419e0676ff11c1

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

setInterval(showSlidingAnimation, 2000);


/*------------------ Animations / Dynamic css ----------------------------*/
