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


document.getElementById("features_section").onclick = () => {
    showAnimation = false;
}

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
    let hostname = location.hostname;
    let url = `http://${hostname}/as/data/db.json`;
    console.log(url);
    let res = await fetch(url);
    let data = await res.json();

    return data.data;
}


let searchBox = document.getElementById("searchip");

// searching 

document.getElementById("searchip").oninput = async () => {
    showAnimation = false;
    let ipboxval = searchBox.value;
    let data = await getData();
    let Citydata = data.all_cities[0];

    console.log(Citydata);

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
                cityData.onclick = () => {
                    let p_text = document.getElementById("select_value").textContent;
                    let select_val = "";
                    if (p_text == "Modern Student Housing") {
                        select_val = "HOUSING";
                    }
                    else if (p_text == "Co-living for Professionals") {
                        select_val = "COLIVING";
                    }
                    else if (p_text == "Managed Apartments") {
                        select_val = "APARTMENT";
                    }

                    let filteredData = filterThis(cityDataArr, select_val);
                    if (filteredData.length != 0) {
                        console.log(filteredData);
                    }
                    else {
                        console.log(cityDataArr);
                    }
                }

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


// select value setting
let select_options_value = document.querySelectorAll(".select_options_p");
let s_o_v_len = select_options_value.length;

for (let i = 0; i < s_o_v_len; i++) {
    select_options_value[i].onclick = () => {
        document.getElementById("select_value").textContent = select_options_value[i].textContent;
    }
}


let filterThis = (cityDataArr, selectVal) => {
    // Create a new array to store the filtered data
    let filteredData = [];

    // Loop through the cityDataArr
    for (let i = 0; i < cityDataArr.length; i++) {
        // Check if the propertyEntityType property of the current element in the array matches the selectVal
        if (cityDataArr[i].propertyEntityType === selectVal) {
            // If it matches, add the element to the filteredData array
            filteredData.push(cityDataArr[i]);
        }
    }

    // Return the filtered data array
    return filteredData;
}