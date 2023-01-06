
locality_dropdown_landmarks = new Map()
//  stat from here -----------------------------------------------------------------------------------
console.log("inside the javascrpt file ")

let getData = async() => {
    const url = `http://localhost:3000/bangalore`

    let datastream = await fetch(url)
    console.log(datastream, "dtastream ----")
    let data = await datastream.json()
    return data
}

function createe(tagname){
    return document.createElement(tagname)
}

function gett(id){
    return document.querySelector(`#${id}`)
}


// -----------------------------------------global variable declaration section -------------------------------------

const API_KEY = `AIzaSyBpZPN1MYtjDBvj_pi8O0dMLMf_qldiRas`
let map_element = gett("map_iframe")
// map_element.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d687.6662667361319!2d77.64445335605313!3d12.841477280455933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd92704396db640bf!2sStanza%20Living%20Amsterdam%20House!5e0!3m2!1sen!2sin!4v1672959720217!5m2!1sen!2sin"
map_element.src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Stanza+Licing,Amsterdam+House,Electronic+City+Phase+1`

function createMapUrl(elem){

    let myownmapsrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=`+ `Stanza+Living+${elem.name.split(" ")[0]}+${elem.name.split(" ")[1]}`
    let landmarkAddress = elem.micromarketName
    let landmarkAddressString = ""
    landmarkAddressString = landmarkAddress.split(" ").join("+")
    
    myownmapsrc += `+${landmarkAddressString}`
    myownmapsrc += `&center=${elem.latitude},${elem.longitude}`

    return myownmapsrc
}


// populatefunction 

let populateHouseList = async() => {

    let data = await getData()
    //console.log(data, "data mil chuka hai doston !!!!!!!!!!!!")
    
    let listContainer = document.querySelector("#plp_content_left_list")
    listContainer.textContent = ""
    
    let count = 0;
    data.some( (elem) => {

        if(count == 12){
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
            house_img_div.addEventListener("mouseover", function(){
                house_img.classList.add("plp_house_img_hover")
            })

            house_img_div.addEventListener("mouseleave", function(){
                house_img.classList.remove("plp_house_img_hover")
            })

            // house deetsdiv, placed second in the house div , flex wise , 

            let house_deets = createe("div")
            house_deets.classList.add("plp_house_deets")
            house_deets.addEventListener("mouseover", function(){

                let linkk = createMapUrl(elem)
                if(linkk == map_element.src){
                    console.log("same hi hai bhia -----------------")
                    return
                }
                map_element.src = linkk
            })

                // house deets - house name // koyto house
                let house_deets_name = createe("div")
                house_deets_name.classList.add("plp_house_deets_housename")

                    let house_deets_name_h3 = createe("h3")
                    house_deets_name_h3.textContent = elem.name 

                    let house_deets_name_fav_btn = createe("span")
                    house_deets_name_fav_btn.innerHTML = `<span class="material-symbols-outlined"> favorite </span>`

                house_deets_name.append(house_deets_name_h3 , house_deets_name_fav_btn)

                // house deets - house area // koramangala
                let house_deets_area = createe("p")
                house_deets_area.textContent = elem.micromarketName

                // house deets - male, female and directions 

                let house_deets_tray1 = createe("div")
                house_deets_tray1.classList.add("plp_house_deets_malefemale")

                    let house_deets_tray1_left = createe("div")

                        let house_deets_tray1_gender = createe("span")
                        house_deets_tray1_gender.textContent = elem.genderName

                        let verticalBar = createe("span")
                        verticalBar.textContent = " | "

                        let house_deets_tray1_occupancy = createe("span")
                        combinedOccupancyString = ""
                        for(var occu of elem.residenceOccupancies){
                            if(occu.soldOut == false){
                                
                                combinedOccupancyString += occu.occupancyName.split(" ")[0] + ". "
                            }
                        }
                        house_deets_tray1_occupancy.textContent = combinedOccupancyString
                        
                    house_deets_tray1_left.append(house_deets_tray1_gender, verticalBar, house_deets_tray1_occupancy)


                    // house deets - tray 1 - directions button 
                    let house_deets_tray1_right = createe("div")

                        let house_deets_directions_btn = createe("button")
                        house_deets_directions_btn.classList.add("plp_house_deets_directions")

                            let house_deets_directions_btn_logo = createe("span")
                            house_deets_directions_btn_logo.innerHTML = `<span class="material-symbols-outlined"> my_location </span>`

                            let house_deets_directions_btn_txt = createe("span")
                            house_deets_directions_btn_txt.textContent = " View Directions "

                        house_deets_directions_btn.append(house_deets_directions_btn_logo, house_deets_directions_btn_txt)

                    house_deets_tray1_right.append(house_deets_directions_btn)

                house_deets_tray1.append( house_deets_tray1_left, house_deets_tray1_right)


                let house_deets_amneties = createe("p")
                house_deets_amneties.textContent = "Amneties"

                let house_deets_tray2 = createe("div")

                    for(let feature of elem.features){
                        if(feature.enabled == true){
                            let feature_btn = createe("button")
                            feature_btn.textContent = feature.name
                            house_deets_tray2.append(feature_btn)
                        } 
                    }

                let house_deets_tray3 = createe("div")

                    let house_deets_tray3_price = createe("div")

                        let house_deets_tray3_price_txt = createe("p")
                        house_deets_tray3_price_txt.textContent = "Starts from :"

                        let house_deets_tray3_price_value = createe("h3")
                        house_deets_tray3_price_value.textContent = elem.startingPrice

                    house_deets_tray3_price.append(house_deets_tray3_price_txt , house_deets_tray3_price_value )

                    
                    let house_deets_tray3_btn1 = createe("button")
                    house_deets_tray3_btn1.textContent = "Schedule a Visit"

                    let house_deets_tray3_btn2 = createe("button")
                    house_deets_tray3_btn2.textContent = "Unlock Discount"

                house_deets_tray3.append( house_deets_tray3_price, house_deets_tray3_btn1 ,  house_deets_tray3_btn2)

            house_deets.append(house_deets_name , house_deets_area, house_deets_tray1, house_deets_amneties, house_deets_tray2, house_deets_tray3)

        house_card.append(house_img_div , house_deets)

        let linebreak = createe("hr")

    listContainer.append(house_card, linebreak)

    count += 1

    locality_dropdown_landmarks.set( elem.micromarketName, 1)
    })
            
    populate_locality_dropdown()
            
}

populateHouseList()

// ---------------------------------- filter section -------------------------------------------------------

function populate_locality_dropdown(){
    let resultdiv= gett("dropdown_locality_results")
    let inputquery = gett("dropdown_locality_input")

    let count = 0
    for(var i of locality_dropdown_landmarks){
        console.log(i)
        let btn = createe("button")
        btn.textContent = i[0]
        btn.addEventListener("click", function(){

        })
        resultdiv.append(btn)
        
        count += 1;
        
        if(count == 8)
            break
    }

}

let show = 0
function showfunction(category){
    console.log("category --------------", category)
    let showdiv = gett(`dropdown_${category}`)
    if(show == 0){
        console.log("1")
        showdiv.style.display = "block"
        show = 1
        return
    }
    else if(show == 1){
        console.log("2")
        showdiv.style.display = "none"
        show = 0
        return
    }
}