
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

let footerComponent = `<footer class="mt-4 pt-5 ps-5 pe-5 pb-2">
<div class="d-flex justify-content-between">
    <div class="footer_brand_logo">
        <img src="https://res.cloudinary.com/stanza-living/image/upload/w_182/v1652358946/Website%20v5/Logo/stanzalogo.png"
            alt="">
    </div>
    <div id="footer_links" class="d-none d-lg-flex justify-content-center">
        <div class="d-flex flex-column">
            <a href="#">About Us</a>
            <a href="#">Team</a>
            <a href="#">Investor Relations</a>
            <a href="#">Media</a>
        </div>
        <div class="d-flex flex-column">
            <a href="#">Blogs</a>
            <a href="#">FAQs</a>
            <a href="#">Refer and Earn</a>
            <a href="#">House Rules</a>
        </div>
        <div class="d-flex flex-column">
            <a href="#">T&C</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="d-flex flex-column">
            <a href="#">COVID-19</a>
            <a href="#">Refunds</a>
            <a href="#">Partner with Us</a>
            <a href="#">Cookie Policy</a>
        </div>
    </div>
    <div id="social_links">
        <div class="d-flex justify-content-between align-items-center">
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
        </div>
    </div>
</div>
<div class="copyright d-flex justify-content-between align-items-center pt-5">
    <p class="copyright_l">Copyright © 2022 | All Rights Reserved by Dtwelve Spaces Pvt Ltd. | Sitemap</p>
    <p class="copyright_r">Images shown are for representational purposes only. Amenities depicted may or may
        not form a part of
        that individual property.</p>
</div>
</footer>`;

export { navComponent, footerComponent };