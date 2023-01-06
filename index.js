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

document.getElementById("close_btn").onclick = () => {
    let popup = document.getElementById("explore_residence_popup");
    popup.style.display = "none";
}


// closing search suggestions
document.getElementById("hero_section").onclick = () => {
    document.getElementById("search_suggestion").style.display = "none";
}


let getData = async () => {
    let res = await fetch(`http://localhost:3000/data`);
    let data = await res.json();

    return data;
}


let searchBox = document.getElementById("searchip");

// searching 

document.getElementById("searchip").oninput = async () => {
    showAnimation = false;
    let ipboxval = searchBox.value;
    let data = await getData();
    let Citydata = data.all_cities[0];


    const result = checkSubstring(ipboxval, Citydata);
    appendSearchSuggestions(result, Citydata);
}


function checkSubstring(substring, obj) {
    const cityNames = Object.keys(obj);

    const matchingNames = cityNames.filter(name => name.includes(substring));

    return matchingNames;
}

// appending search suggestions
let timeoutId = null;

let appendSearchSuggestions = async (result, city_data) => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    let suggestionBox = document.getElementById("search_suggestion");

    timeoutId = setTimeout(async () => {
        suggestionBox.textContent = "";

        if (result.length != 0) {
            let cityDataArr = city_data[result[0]];
            let data = await getAlldata();
            suggestionBox.style.display = "flex";
            result.forEach(element => {
                const CityName = document.createElement("p");
                let str = element;
                str = str.charAt(0).toUpperCase() + str.slice(1);

                CityName.textContent = str;

                const suggestionType = document.createElement("p");
                suggestionType.textContent = "City";
                suggestionType.style.color = "#61c3ae";

                const cityData = document.createElement("div");
                cityData.append(CityName, suggestionType);
                cityData.style.display = "flex";
                cityData.style.justifyContent = "space-between";
                cityData.style.padding = "10px 15px";
                cityData.classList.add("cityHover");

                suggestionBox.append(cityData);
            });

            console.log(city_data);

            for (let i = 0; i < 20; i++) {
                let propertyType = cityDataArr[i].propertyEntityType

                const CityName = document.createElement("p");
                let str = cityDataArr[i].name + " , " + cityDataArr[i].cityName;
                str = str.charAt(0).toUpperCase() + str.slice(1);

                CityName.textContent = str;

                const suggestionType = document.createElement("p");
                suggestionType.textContent = propertyType.toLowerCase();
                suggestionType.style.color = "#61c3ae";

                const cityData = document.createElement("div");
                cityData.append(CityName, suggestionType);
                cityData.style.display = "flex";
                cityData.style.justifyContent = "space-between";
                cityData.style.padding = "10px 15px";
                cityData.classList.add("cityHover");

                suggestionBox.append(cityData);
            }
        }

    }, 500);
}


// getting all_data array

let getAlldata = async () => {
    let res = await fetch(`http://localhost:3000/data`);
    let data = await res.json();

    return data;
}