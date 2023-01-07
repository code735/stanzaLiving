
let navComponent = `<div id="navbar" class="py-4 d-flex justify-content-between align-items-center">
<div class="brand_logo">
    <img src="https://res.cloudinary.com/stanza-living/image/upload/v1583405334/NewWebsite/Stanza_Living_Logo_3x.png"
        alt="">
</div>
<div class="nav_links">
    <a href="#" id="exlpore_residence_link">Explore Residences</a>
    <a href="">
        Know More
        <span class="material-symbols-outlined">
            expand_more
        </span>
    </a>
    <button id="request_callback">
        <i class="bi bi-telephone-fill"></i>
        <a href="SignuploginPage/SignUp.html">Request a callback</a>
    </button>

    <div id="explore_residence_popup">
        <div id="e_r_details">
            <div id="close_btn">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
            <div id="nav_container_hero"></div>
            <h6 class="py-2">Popular Cities</h6>
            <div id="popular_cities">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png"
                                width="60" height="60"></div>
                        <div class="city-name">Bengaluru</div>
                    </div>
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/v1582114421/NewWebsite/cities/chennai.png"
                                width="60" height="60"></div>
                        <div class="city-name">Chennai</div>
                    </div>
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/coimbatore.png"
                                width="60" height="60"></div>
                        <div class="city-name">Coimbatore</div>
                    </div>
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/dehradun.png"
                                width="60" height="60"></div>
                        <div class="city-name">Dehradun</div>
                    </div>
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/delhi.png"
                                width="60" height="60"></div>
                        <div class="city-name">Delhi</div>
                    </div>
                    <div class="city-slider-item cursor-pointer">
                        <div class="city-img hidden lg:inline-block"><img
                                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1637904076/Website/CMS-Uploads/gadbjhmexjzadryrckds.png"
                                width="60" height="60"></div>
                        <div class="city-name">Mumbai</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;


export { navComponent };