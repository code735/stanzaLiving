
let wishlisted_house_array

let getData = () => {

    // -------------JUST FOR TESTING-----------------------
        wishlisted_house_array = JSON.parse(localStorage.getItem("wishlisted_house_array")) 
        return wishlisted_house_array
    //------------------------------------
    //var data = JSON.parse(localStorage.getItem("citiesArr")) || [];

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

    let listContainer = document.querySelector("#wl_content_left_list")
    listContainer.textContent = ""

    // might causse problme --------------------------------

    let main_div = gett("plp_content")
    main_div.style.display = "flex"
    // might cause problme ------------------------------------

    let number_of_search_results = gett("wl_total_number")
    number_of_search_results.textContent = ""
    number_of_search_results.textContent = "( " + data.length +" results )"

    // let pg_in_cityname = gett("pg_in_cityname")
    // pg_in_cityname.textContent = ""
    // pg_in_cityname.textContent = get_pg_in_cityname()

    console.log("is data nul ", data)
    if(data == [] || data == null || data == undefined || data.length == 0){

        gett("wl_search_query").style.display = "none"

        let main_div = gett("plp_content")
        main_div.textContent = ""
        main_div.style.display = "block"

        let no_result_found_img = createe("img")
        no_result_found_img.src = "./sad_face.png"
        no_result_found_img.classList.add("sad_face_emoji")

        let nothing_to_see_here_div = createe("div")

            let nothing_to_see_here_h2 = createe("h1")
            nothing_to_see_here_h2.textContent = "Nothing to see here"

            let nothing_to_see_here_text = createe("p")
            nothing_to_see_here_text.textContent = `You're yet to add your favourite residences to the wishlist.`
            nothing_to_see_here_text.classList.add("nothing_to_see_here_text")

        nothing_to_see_here_div.append(nothing_to_see_here_h2 , nothing_to_see_here_text)
        nothing_to_see_here_div.classList.add("nothing_to_see_here_div")


        let go_back_to_listing_btn = createe("button")
        go_back_to_listing_btn.textContent = "Go Back to Listings"
        go_back_to_listing_btn.classList.add("go_back_to_listing_btn")
        go_back_to_listing_btn.addEventListener("click", function(){
            window.location.href = "./product_list.html"
        })

        main_div.append(no_result_found_img, nothing_to_see_here_div, go_back_to_listing_btn)

        return
    }

    let count = 0;
    data.some((elem) => {

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
                        localStorage.setItem( "individual_house", JSON.stringify(elem))
                        window.location.href = "./individual_product_page.html"
                    })

                    let house_deets_name_fav_btn = createe("span")
                    house_deets_name_fav_btn.innerHTML = `<i class="fa-solid fa-heart fa-lg"></i>`
                    house_deets_name_fav_btn.classList.add("wishlist_heart_button")
                    house_deets_name_fav_btn.addEventListener("click", function(){

                        console.log("entered wishlist heart", elem)

                        let indexx = wishlisted_house_array.indexOf(elem)
                        wishlisted_house_array.splice(indexx, 1)
                        localStorage.setItem("wishlisted_house_array", JSON.stringify(wishlisted_house_array))
                        populateHouseList(wishlisted_house_array)
                        return

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

// function isElementAlreadyinLocalStorage(e){
//     let count = -1
//     for(var i of wishlisted_house_array){
//         count += 1
//         console.log(i.name , e.name)
//         if(i.name == e.name && i.residenceId == e.residenceId){
//             return count
//         }
//     }
//     count += 1
//     return count

//     return false
// }


function callFirstTime() {
    wishlisted_house_array = getData()
    // console.log("global data wishlist ", globalData)
    populateHouseList(wishlisted_house_array)
}

// function get_pg_in_cityname(){
//     return globalData[0].cityName
// }

callFirstTime()
// console.log(globalData, "yaaaaaaaaaa")

gett("wl_directory").addEventListener("click", function(){
    window.location.href = "./product_list.html"
})
