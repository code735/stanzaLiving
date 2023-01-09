// import {navComponent} from "../../components/searchbox.js"

// document.querySelector("nav").innerHTML = navComponent

// console.log("yahan aage hai")
// -------------------------------------------

let locality_dropdown_landmarks = new Map()
//  stat from here -----------------------------------------------------------------------------------
console.log("inside the javascrpt file ")

let getData = async () => {

    // -------------JUST FOR TESTING--------------------------
        // let url = `http://localhost:3000/bangalore`
        // let datastream = await fetch(url)
        // let data = await datastream.json()

    //------------------------------------
    let data = JSON.parse(localStorage.getItem("citiesArr")) || [];

    return data;
}

function createe(tagname) {
    return document.createElement(tagname)
}

function gett(id) {
    return document.querySelector(`#${id}`)
}


// -----------------------------------------global variable declaration section -------------------------------------

const API_KEY = `AIzaSyBpZPN1MYtjDBvj_pi8O0dMLMf_qldiRas`
let map_element = gett("map_iframe")
// map_element.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d687.6662667361319!2d77.64445335605313!3d12.841477280455933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd92704396db640bf!2sStanza%20Living%20Amsterdam%20House!5e0!3m2!1sen!2sin!4v1672959720217!5m2!1sen!2sin"
map_element.src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Stanza+Licing,Amsterdam+House,Electronic+City+Phase+1`

let wishlisted_house_array = JSON.parse(localStorage.getItem("wishlisted_house_array")) || []

function createMapUrl(elem) {

    let myownmapsrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=` + `Stanza+Living+${elem.name.split(" ")[0]}+${elem.name.split(" ")[1]}`
    let landmarkAddress = elem.micromarketName
    let landmarkAddressString = ""
    landmarkAddressString = landmarkAddress.split(" ").join("+")

    myownmapsrc += `+${landmarkAddressString}`
    myownmapsrc += `&center=${elem.latitude},${elem.longitude}`

    return myownmapsrc
}


// populatefunction 

let populateHouseList = (data) => {

    //console.log(data, "data mil chuka hai doston !!!!!!!!!!!!")

    let listContainer = document.querySelector("#plp_content_left_list")
    listContainer.textContent = ""

    // might causse problme --------------------------------
    let main_div = gett("plp_content")
    main_div.style.display = "flex"
    // might cause problme ------------------------------------

    let number_of_search_results = gett("number_of_search_results")
    number_of_search_results.textContent = ""
    number_of_search_results.textContent = data.length

    let pg_in_cityname = gett("pg_in_cityname")
    pg_in_cityname.classList.add("make_font_small")
    pg_in_cityname.textContent = ""
    pg_in_cityname.textContent = get_pg_in_cityname()

    console.log("is data nul ", data)
    if(data == [] || data == null || data == undefined || data.length == 0){

        gett("plp_search_query").style.display = "none"

        let main_div = gett("plp_content")
        main_div.textContent = ""
        main_div.style.display = "block"

        console.log("yooooooooo")
        let no_result_found_msg = createe("h2")
        no_result_found_msg.textContent = "No Results Found"

        main_div.append(no_result_found_msg)

        let no_result_found_img = createe("img")
        no_result_found_img.src = "./sad_face.png"
        no_result_found_img.classList.add("sad_face_emoji")
        main_div.append(no_result_found_img)

        return
    }
    let cityname_of_search_results = gett("cityname_of_search_results")
    cityname_of_search_results.textContent = ""
    cityname_of_search_results.textContent = get_pg_in_cityname()

    let count = 0;
    data.some((elem) => {

        if (count == 12) {
            return true
        }

        // house div which will container two divs - img and deets 
        let house_card = createe("div")
        house_card.classList.add("plp_house_lists")

        // house image div - placed first in house div flex wise

            let house_img_div = createe("div")
            house_img_div.classList.add("plp_house_img_div")

                let house_img = createe("img")
                house_img.src = elem.images[0].imageUrl
                house_img.classList.add("plp_house_img")

            house_img_div.append(house_img)
            house_img_div.addEventListener("mouseover", function () {
                house_img.classList.add("plp_house_img_hover")
            })

            house_img_div.addEventListener("mouseleave", function () {
                house_img.classList.remove("plp_house_img_hover")
            })

        // house deetsdiv, placed second in the house div , flex wise , 

            let house_deets = createe("div")
            house_deets.classList.add("house_deets")
            house_deets.addEventListener("mouseover", function () {

                let linkk = createMapUrl(elem)
                if (linkk == map_element.src) {
                    console.log("same hi hai bhia -----------------")
                    return
                }
                //map_element.src = linkk
            })

                // house deets - house name // koyto house // medan house
                let house_deets_name = createe("div")
                house_deets_name.classList.add("house_deets_housename")

                    let house_deets_name_h3 = createe("h3")
                    house_deets_name_h3.textContent = elem.name
                    // mouse over on house name to chnage color 
                    house_deets_name_h3.addEventListener("mouseover", function(){
                        house_deets_name_h3.style.color = "grey"
                    })
                    // mouse leaves on house name - revert to black color
                    house_deets_name_h3.addEventListener("mouseleave", function(){
                        house_deets_name_h3.style.color = "black"
                    })
                    // mouse click, navigate to next page , individual house page
                    house_deets_name_h3.addEventListener("click", function(){
                        local_storage_object = {
                            "product" : elem
                        }
                        
                        localStorage.setItem( "individual", JSON.stringify(local_storage_object))
                        window.location.href = "../../individualPage/individualPage.html"
                    })

                    let house_deets_name_fav_btn = createe("span")
                    house_deets_name_fav_btn.innerHTML = `<i class="fa-regular fa-heart fa-lg"></i>`
                    house_deets_name_fav_btn.classList.add("wishlist_heart_button")
                    house_deets_name_fav_btn.addEventListener("click", function(){
                        console.log("entered wishlist heart", elem)

                        let indexx = isElementAlreadyinLocalStorage(elem)

                        if( indexx == -1 || indexx >= wishlisted_house_array.length){
                            wishlisted_house_array.push(elem)
                            localStorage.setItem("wishlisted_house_array", JSON.stringify(wishlisted_house_array))
                            house_deets_name_fav_btn.innerHTML = `<i class="fa-solid fa-heart fa-lg" ></i>`
                        }
                        else{
                            let indexx = wishlisted_house_array.indexOf(elem)
                            wishlisted_house_array.splice(indexx, 1)
                            localStorage.setItem("wishlisted_house_array", JSON.stringify(wishlisted_house_array))
                            house_deets_name_fav_btn.innerHTML = `<i class="fa-regular fa-heart fa-lg" ></i>`

                        }
                        
                    })

                house_deets_name.append(house_deets_name_h3, house_deets_name_fav_btn)

                // house deets - house area // koramangala
                let house_deets_area = createe("p")
                house_deets_area.textContent = elem.micromarketName
                house_deets_area.classList.add("house_deets_area")

                // house deets - male, female and directions 

                let house_deets_tray1 = createe("div")
                house_deets_tray1.classList.add("house_deets_tray1")

                    let house_deets_tray1_left = createe("div")

                        let house_deets_tray1_gender = createe("span")
                            let house_deets_tray1_gender_logo = createe("img")
                            house_deets_tray1_gender_logo.src = "./gender.png"
                            house_deets_tray1_gender_logo.classList.add("icons_tray1")

                            let house_deets_tray1_gender_txt = createe("span")
                            house_deets_tray1_gender_txt.textContent = elem.genderName
                            house_deets_tray1_gender_txt.classList.add("icon_txt_tray1")

                        house_deets_tray1_gender.append(house_deets_tray1_gender_logo, house_deets_tray1_gender_txt)
                        house_deets_tray1_gender.classList.add("house_deets_tray1_gender")

                        let verticalBar = createe("span")
                        verticalBar.textContent = " | "

                        let house_deets_tray1_occupancy = createe("span")

                            let house_deets_tray1_occupancy_logo = createe("img")
                            house_deets_tray1_occupancy_logo.src = "./occupancy.png"
                            house_deets_tray1_occupancy_logo.classList.add("icons_tray1")

                            let house_deets_tray1_occupancy_txt = createe("span")

                                let combinedOccupancyString = ""
                                for (var occu of elem.residenceOccupancies) {
                                    if (occu.soldOut == false) {

                                        combinedOccupancyString += occu.occupancyName.split(" ")[0] + ", "
                                    }
                                }
                                combinedOccupancyString = combinedOccupancyString.slice(0 , combinedOccupancyString.length - 2)

                            house_deets_tray1_occupancy_txt.textContent = combinedOccupancyString                         
                            
                        house_deets_tray1_occupancy.append(house_deets_tray1_occupancy_logo, house_deets_tray1_occupancy_txt)
                        house_deets_tray1_occupancy.classList.add("house_deets_tray1_occupancy")
                        house_deets_tray1_occupancy_txt.classList.add("icon_txt_tray1")

                    house_deets_tray1_left.append(house_deets_tray1_gender, verticalBar, house_deets_tray1_occupancy)
                    house_deets_tray1_left.classList.add("house_deets_tray1_left")


                    // house deets - tray 1 - directions button 
                    let house_deets_tray1_right = createe("div")

                        let house_deets_directions_btn = createe("button")
                        house_deets_directions_btn.classList.add("house_deets_directions_btn")

                            let house_deets_directions_btn_logo = createe("img")
                            house_deets_directions_btn_logo.src = "./directions.png"
                            house_deets_directions_btn_logo.classList.add("icons_tray1")

                            let house_deets_directions_btn_txt = createe("span")
                            house_deets_directions_btn_txt.textContent = " View Directions "
                            house_deets_directions_btn_txt.classList.add("icon_direction_tray1")

                        house_deets_directions_btn.append(house_deets_directions_btn_logo, house_deets_directions_btn_txt)

                    house_deets_tray1_right.append(house_deets_directions_btn)

                house_deets_tray1.append(house_deets_tray1_left, house_deets_tray1_right)


                let house_deets_amneties = createe("p")
                house_deets_amneties.textContent = "Amneties"
                house_deets_amneties.classList.add("house_deets_amneties")

                let house_deets_tray2 = createe("div")
                if (elem.features != null) {
                    for (let feature of elem.features) {
                        if (feature.enabled == true) {
                            let feature_btn = createe("button")

                                let feature_btn_logo = createe("img")
                                
                                if(feature.name == "Attached Balcony")
                                    feature_btn_logo.src = "./balcony.png"
                                else if(feature.name == "Spacious Cupboard")
                                    feature_btn_logo.src = "./cupboard.png"
                                else if(feature.name == "Window")
                                    feature_btn_logo.src = "./window.png"
                                else if(feature.name == "Air Conditioning")
                                    feature_btn_logo.src = "./ac.png"
                                else if(feature.name == "Attached Washroom")
                                    feature_btn_logo.src = "./washroom.png"
                                else if(feature.name == "Storage Shelf")
                                    feature_btn_logo.src = "./shelf.png"
                                else if(feature.name == "Desert Cooler")
                                    feature_btn_logo.src = "./cooler.png"
                                else
                                    feature_btn_logo.src = "./washroom.png"
                                
                                feature_btn_logo.classList.add("feature_btn_logo")

                                let feature_btn_txt = createe("span")
                                feature_btn_txt.textContent = feature.name 
                                feature_btn_txt.classList.add("feature_btn_txt")

                            feature_btn.append(feature_btn_logo , feature_btn_txt)
                            feature_btn.classList.add("house_deets_tray2_amneties_buttons")
                            house_deets_tray2.append(feature_btn)
                        }
                    }
                }
                house_deets_tray2.classList.add("house_deets_tray2")

                let house_deets_tray3 = createe("div")

                    let house_deets_tray3_price = createe("div")

                        let house_deets_tray3_price_txt = createe("p")
                        house_deets_tray3_price_txt.textContent = "Starts from"
                        house_deets_tray3_price_txt.classList.add("house_deets_tray3_price_txt")

                        let house_deets_tray3_price_value = createe("h3")
                        house_deets_tray3_price_value.textContent = "₹"+elem.startingPrice+"/mo*"
                        house_deets_tray3_price_value.classList.add("house_deets_tray3_price_value")

                    house_deets_tray3_price.append(house_deets_tray3_price_txt, house_deets_tray3_price_value)


                    let house_deets_tray3_btn1 = createe("button")
                    house_deets_tray3_btn1.textContent = "SCHEDULE A VISIT"
                    house_deets_tray3_btn1.classList.add("house_deets_tray3_btn1")
                    house_deets_tray3_btn1.addEventListener("click", function(){
                        gett("fadedParent").style.display = "block"
                    })

                    let house_deets_tray3_btn2 = createe("button")
                    house_deets_tray3_btn2.textContent = "UNLOCK DISCOUNT"
                    house_deets_tray3_btn2.classList.add("house_deets_tray3_btn2")
                    house_deets_tray3_btn2.addEventListener("click", function(){
                        gett("fadedParent").style.display = "block"
                    
                    })

                house_deets_tray3.append(house_deets_tray3_price, house_deets_tray3_btn1, house_deets_tray3_btn2)
                house_deets_tray3.classList.add("house_deets_tray3")

            house_deets.append(house_deets_name, house_deets_area, house_deets_tray1, house_deets_amneties, house_deets_tray2, house_deets_tray3)

        house_card.append(house_img_div, house_deets)

        let linebreak = createe("hr")

        listContainer.append(house_card, linebreak)

        count += 1

    })


}

function isElementAlreadyinLocalStorage(e){
    let count = -1
    for(var i of wishlisted_house_array){
        count += 1
        console.log(i.name , e.name)
        if(i.name == e.name && i.residenceId == e.residenceId){
            return count
        }
    }
    count += 1
    return count

    return false
}
let globalData

async function callFirstTime() {
    globalData = await getData()
    populateHouseList(globalData)
}

function get_pg_in_cityname(){
    return globalData[0].cityName
}

callFirstTime()
// console.log(globalData, "yaaaaaaaaaa")


// ---------------------------------- filter section -------------------------------------------------------

function populate_locality_dropdown() {
    let resultdiv = gett("dropdown_locality_results")
    let inputquery = gett("dropdown_locality_input")

    let count = 0
    for (var i of locality_dropdown_landmarks) {
        console.log(i)
        let btn = createe("button")
        btn.textContent = i[0]
        btn.classList.add("all_locality_buttons")
        btn.addEventListener("click", function () {
            let locality_name = btn.textContent
            let indexx = locality_selected_array.indexOf(locality_name)

            if (indexx > -1 && indexx < locality_selected_array.length) {
                btn.style.backgroundColor = "rgb(240,240,240)"
                locality_selected_array.splice(indexx, 1)
            }
            else {
                btn.style.backgroundColor = "gray"
                locality_selected_array.push(locality_name)
            }

            console.log(locality_selected_array)
        })
        resultdiv.append(btn)

        count += 1;

        if (count == 8)
            break
    }

}

async function createMapforLocality() {
    let data = await getData()

    for (var i of data) {
        locality_dropdown_landmarks.set(i.micromarketName, 1)
    }
    console.log(locality_dropdown_landmarks, "yeah man here")
    populate_locality_dropdown()
}

createMapforLocality()

let show = 0
function showfunction(category) {
    closeAllfilters()
    console.log("category --------------", category)
    let showdiv = gett(`dropdown_${category}`)
    if (show == 0) {
        console.log("1")

        showdiv.style.display = "block"

        show = 1
        return
    }
    else if (show == 1) {
        console.log("2")
        showdiv.style.display = "none"
        show = 0
        return
    }
}

//  individual filters ---------------------------------------------

//locality filter 

let locality_selected_array = []

let locality_save_savebtn = gett("locality_save_savebtn")
let locality_save_clearbtn = gett("locality_save_clearbtn")

locality_save_clearbtn.addEventListener("click", function () {
    // by now locality_seleected_array should have all the selected buttons 
    locality_selected_array = []
    let locality_dropdown_btn_list = document.querySelectorAll("dropdown_locality_results > button")
})

locality_save_savebtn.addEventListener("click", function () {
    closeAllfilters()
    filterLocality(locality_selected_array, globalData)
})

function closeAllfilters() {
    gett("dropdown_locality").style.display = "none"
    gett("dropdown_occupancy").style.display = "none"
    gett("dropdown_budget").style.display = "none"
    gett("dropdown_gender").style.display = "none"
    gett("dropdown_amneties").style.display = "none"
}

function filterLocality(arr_location, dat) {

    let filteredData = dat.filter(function (elem) {
        for (var i of arr_location) {
            //console.log(elem.micromarketName , i, "comparison kar rahe hai" )
            if (elem.micromarketName == i) {
                return elem
            }
        }
    })

    console.log(filteredData)
    populateHouseList(filteredData)

    //clear array 
    locality_selected_array = []

    //make css of all clikced buttons normal
    clearFilterButtonsCSS(document.querySelectorAll(".all_locality_buttons"))
}

function clearFilterButtonsCSS(xx) {
    //console.log(xx, "ye xXXX hai")

    for (var i of xx) {
        i.style.backgroundColor = "rgb(240,240,240)"
    }
}
// budget filter -----------------------------

console.log(gett("budget_save_savebtn"))
gett("budget_save_savebtn").addEventListener("click", function () {
    closeAllfilters()
    let minpricee = gett("budget_input_min").value
    let maxpricee = gett("budget_input_max").value

    if (minpricee != '' && maxpricee != '' && minpricee != null && maxpricee != null) {
        showInBudget(minpricee, maxpricee)
    }
})

function showInBudget(start, end) {
    console.log(start, end, "these are my price filters")

    let filteredData = globalData.filter(function (e) {
        if (e.startingPrice >= start && e.startingPrice < end) {
            return e
        }
    })

    populateHouseList(filteredData)


}





//  occuapncy filter ----------------------------------------------

let occupancy_selected_array = []

function fill_selected_occupancy_array() {
    buttontext = event.target.textContent
    let btn = event.target
    let indexx = occupancy_selected_array.indexOf(buttontext)
    if (indexx > -1) {
        btn.style.backgroundColor = "rgb(240,240,240)"
        occupancy_selected_array.splice(indexx, 1)
    }
    else {
        btn.style.backgroundColor = "grey"
        occupancy_selected_array.push(buttontext)
    }
}

gett("occupancy_save_savebtn").addEventListener("click", function () {
    closeAllfilters()
    filterOccupancy(occupancy_selected_array, globalData)
})

function filterOccupancy(filterarr, data) {
    console.log(filterarr, "??????????")
    filteredData = data.filter(function (e) {
        for (var occupancyType of filterarr) {
            for (var y of e.residenceOccupancies) {
                // console.log(y.soldOut, y.occupancyName, occupancyType)
                if (y.soldOut == false && y.occupancyName.split(" ")[0] == occupancyType) {
                    return e
                }
            }
        }
    })

    console.log(filteredData)

    populateHouseList(filteredData)

    occupancy_selected_array = []

    //make css of all clikced buttons normal
    clearFilterButtonsCSS(document.querySelectorAll(".all_occupancy_buttons"))
}

// gender filter -----------------------

let gender_selected_array = []

function fill_selected_gender_array() {
    let btn = event.target
    indexx = gender_selected_array.indexOf(btn.textContent)

    if (indexx > -1) {
        btn.style.backgroundColor = "rgb(240,240,240)"
        gender_selected_array.splice(indexx, 1)
    }
    else {
        gender_selected_array.push(btn.textContent)
        btn.style.backgroundColor = "grey"
    }
}

gett("gender_save_savebtn").addEventListener("click", function () {
    closeAllfilters()
    filterGender(gender_selected_array, globalData)
})

function filterGender(filterarr, data) {

    let filteredData = data.filter(function (e) {
        for (var genderr of filterarr) {
            // console.log(genderr, e.genderName)
            if (e.genderName == genderr) {
                return e
            }
        }
    })

    populateHouseList(filteredData)

    gender_selected_array = []

    clearFilterButtonsCSS(document.querySelectorAll(".all_gender_buttons"))
}
//amneties filter ----------------------------

let amneties_selected_array = []

function fill_selected_amneties_array() {

    let checkboxTxt = event.target.value
    let indexx = amneties_selected_array.indexOf(checkboxTxt)

    if (indexx > -1) {
        // element already present 

    }
    else {
        amneties_selected_array.push(checkboxTxt)
    }
}

gett("amneties_save_savebtn").addEventListener("click", function () {
    closeAllfilters()
    filterAmneties(amneties_selected_array, globalData)
})

function filterAmneties(filterarr, data) {
    let filteredData = data.filter(function (e) {
        for (var amnetyType of filterarr) {
            // console.log(e.features , "features")
            if (e.features != null) {
                for (var y of e.features) {
                    if (y.enabled == true && y.name == amnetyType)
                        return e
                }
            }
            else {
                console.log(e, "yahan pe null tha feature")
            }
        }
    })

    console.log(filteredData)

    populateHouseList(filteredData)

    amneties_selected_array = []

    clearAmnetiesCheckboxValues(document.querySelectorAll(".all_amneties_checkbox"))
}

function clearAmnetiesCheckboxValues(amneties_checboxes) {
    console.log(amneties_checboxes, "all the menties vhecboxes")
    for (var i of amneties_checboxes) {
        i.checked = false
    }
}


// -------------------------------------------------- sort functionality -----------------------------------------------------------------------------------// 

function sortData() {
    let sorttype = gett("sort_data_dropdown")
    console.log(sorttype.value)
    if (sorttype.value == "ascending") {
        // get from localstorage 
        //console.log(globalData, "before sort")
        globalData.sort(function (x, y) {
            if (x.startingPrice > y.startingPrice)
                return 1
            else if (x.startingPrice < y.startingPrice)
                return -1
            else
                return 0
        })
        // console.log(globalData, "after sort")
        populateHouseList(globalData)
    }
    else if (sorttype.value == "descending") {
        // console.log(globalData, "before sort")
        globalData.sort(function (x, y) {
            if (x.startingPrice > y.startingPrice)
                return -1
            else if (x.startingPrice < y.startingPrice)
                return 1
            else
                return 0
        })
        // console.log(globalData, "after sort")
        populateHouseList(globalData)
    }
    else if (sorttype.value == "popularity") {

        populateHouseList(globalData)
    }
    else {
        console.log("wrong sort type mate")
    }
}

// popup button close 

gett("close_btn_popup").addEventListener("click", function(){
    gett("fadedParent").style.display = "none"

})

// move to wishlist page ...........

function moveToWishlist(){
    window.location.href = "./wishlist.html"
}