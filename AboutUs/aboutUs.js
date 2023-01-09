var displayDiv =  document.getElementById("display");
document.getElementById("why").addEventListener('click', displayWhy);
document.getElementById("what").addEventListener('click', displayWhat);
document.getElementById("how").addEventListener('click', displayHow);
// document.getElementById("navBat").addEventListener('')
function displayWhy(){
       displayDiv.innerHTML = ` <div id="whyBox">
       <div id = "globalWhy1">
               <div> 
               <h1>We didn't find it for us,</h1>
              <h1> so we created it for you</h1>
               <p>That's essentially our story in one sentence.
                   Crammed up hostels or cooped up PGs - not much of a choice, is it? That's why we created Stanza Living - a place designed by people who've been in your shoes. Understand you. And are inspired by you.</p>
               </div> 
               
                <div>
                <img src="https://www.stanzaliving.com/assets/about-us-pattern.png" class="pattern" alt="">
                   <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fw_800%2Fv1653991914%2FWebsite%2520v5%2FAbout_Us%2Fabout-us-image1.jpg&w=1920&q=75" alt="">
                   
                   </div>
       </div>
        <div id = "globalWhy2">
           <div>
           <div>
               <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fw_800%2Fv1653991919%2FWebsite%2520v5%2FAbout_Us%2Fabout-us-image2.jpg&w=1920&q=75" alt="">
           </div>
           <div id = "whySecond">
               <h1>You needed a place like home,</h1>
               <h1>so we moved back home</h1>
               <p>It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and Sandeep, met again. Reminiscing about the 'good old hostel days', they realised a lot of that 'good' could've been better. So to give youngsters that 'better', in 2017, they set up a base in New Delhi, and the rest, as we say, is the present.</p>
           </div>
       </div>
      
           <img src="https://www.stanzaliving.com/assets/about-us-pattern.png" style="position:absolute" alt="">
       
       </div>
       <div>
       <div class="upper_map_text">
           <h1>You moved to a new city,</h1>
           <h1>so we moved there too</h1>
           <p>Today, we've come a long way - from the two residences in Delhi to an impressive 450+ residences in more than 24+ cities across the country, and we promise we'll soon be ready to welcome you in many more.</p>
        </div>
        <div id = "indiaMap">
        <img src="Screenshot (143).png" alt="" id = "indiaImg">
       </div>
       </div>
       <div>
           <div>
               <div class="your_friends_text">
                   <h1>You need friends in a new city, <span id="h1sec"><br>so 2,000+ people came together</span></h1>
                   <p>The dream only Anindya and Sandeep once shared has now found a niche in the hearts of 2,000+ individuals who wake up in the morning just to ensure Stanza Living delivers on the promise made to you.
                   </p>
                   <a href="/teams.html">Meet the Dreamweavers</a>
               </div>
               <div>
                   <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fw_800%2Fv1654882093%2FWebsite%2520v5%2FAbout_Us%2Fabout-us3.jpg&w=1920&q=75" alt="">
               </div>
           </div>
       </div>
       <div class="inspire_work">
            <h1>You inspire our work, <br><span>so the world notices it too</span></h1>  
           
            <img src="Screenshot (146).png" alt="">
          
       </div>
   </div>`
   document.getElementById("why").style.color = "#60c3ad";
   document.getElementById("what").style.color =  "#7d7d7d";
   document.getElementById("how").style.color =  "#7d7d7d";
   document.getElementById("why").style.borderBottom = "2px solid #60c3ad "
   document.getElementById("what").style.borderBottom = "none"
   document.getElementById("how").style.borderBottom = "none"
}

function displayWhat(){
    displayDiv.innerHTML = `<div id="whatBox">
    <div id="mainPara">
        <p>A place that feels like 'home' as soon as you enter it. A place where we steal away your chores and replace them with care. A place where you'll have technology in your pocket and your tribe by your side. A place that's all about you. And that is no wishful thinking, but our unwavering PACT with you.</p>
    </div>
    <div id="whatLowerPart">
        <div id="scrollOptions">
            <div id="productBtn"></div>
            <div id="amenitiesBtn"></div>
            <div id="communityBtn"></div>
            <div id="technologyBtn"></div>
        </div>
    <div id="scrollPage">
    <div id="product">
       <div>
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681234/Website%20v5/About_Us/product1.jpg" alt="">
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681236/Website%20v5/About_Us/product2.jpg" alt="">
       </div>
       <div>
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681240/Website%20v5/About_Us/product3.jpg" alt="">
       </div>
       <p>The cushioning of the bed's mattress to the colour of the walls in the hallway and the availability of charging points at an arm's length - every nook and corner of a Stanza Living residence has been designed to reflect you and your current life stage.</p>
    </div>
    <div id="amenities">
       <div>
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681231/Website%20v5/About_Us/amenities1.jpg" alt="">
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681233/Website%20v5/About_Us/amenities2.jpg" alt="">     
       </div>
       <div>
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681232/Website%20v5/About_Us/amenities3.jpg" alt="">
       </div>
       <p>We know you can't even differentiate between Toor and Chana Dal; forget about learning how to cook. That you're not quite sure where the detergent goes in the washing machine. That the only time you used a broom in your room was to make a reel. That's why we're taking the responsibilities of these chores off your shoulders for good.</p>
    </div>
    <div>
        <div id="community">
            <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681240/Website%20v5/About_Us/community1.jpg" alt="">
            <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681231/Website%20v5/About_Us/community2.jpg" alt="">
        </div>
        <div>
            <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681234/Website%20v5/About_Us/community3.jpg" alt="">
        </div>
        <p>We want your stay with us to stay with you forever. We want you to find your new best friend, your future business partner, your band or anyone else who can help you grow. That's why we connect you with all of them through Synapse - our Community Programme, to have the best time of your life. Trust us, you'll look back at this time as the one that changed your life forever.</p>
    </div>
    <div id="technology">
       <div>
         <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681239/Website%20v5/About_Us/technology1.jpg" alt="">
         <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681235/Website%20v5/About_Us/technology2.jpg" alt="">
       </div>
       <div>
        <img src="https://res.cloudinary.com/stanza-living/image/upload/v1654681236/Website%20v5/About_Us/technology3.jpg" alt="">
       </div>
       
        <p>In an age where you carry your world around a tiny device, your life shouldn't be stuck in the 1990s. Or even the 2000s. That's why placing service requests, keeping up to date with the latest community events, the entire onboarding process, etcetera etcetera are all at your fingertips through a dedicated app. So, you could say, we really tech care of you #sorrynotsorry</p>
       
    </div>
   </div>
</div>
</div>`
document.getElementById("what").style.color = "#60c3ad"
document.getElementById("how").style.color =  "#7d7d7d";
document.getElementById("why").style.color =  "#7d7d7d";
document.getElementById("what").style.borderBottom = "2px solid #60c3ad "
   document.getElementById("why").style.borderBottom = "none"
   document.getElementById("how").style.borderBottom = "none"
}

function displayHow(){
    displayDiv.innerHTML = `<div id="howBox">
    <div>
        <div>
            <h1>We designed the backdrop of your life</h1>
            <p>The sofa in the lounge will make you see your bestie and you arguing about whose day was more hectic. The bed in your room will give you a picture of where you'll be scrolling through insta stories. The microwave in the pantry will make you imagine slurping on a piping hot bowl of noodles in the middle of the night. Simply put, you'll see a bit of your life in every spot of the residence. And a place that does that is home</p>
        </div>
        <div>
            <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fv1654681234%2FWebsite%2520v5%2FAbout_Us%2Fhow1.jpg&w=1920&q=75" alt="">
        </div>
    </div>
    <div>
        <div>
            <h1>It’s unique</h1>
            <h1>It’s our signature style</h1>
        </div>
        <div>
            <p>The buildings that become our residences come in different shapes and sizes. And aren't we glad about that? That way, we can retain their distinct architecture while infusing them with our design philosophy. So that every Stanza Living residence stays unique and yet is uniquely Stanza Living.</p>
        </div>
        
    </div>
    <div>
        <div>
           <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fv1654681234%2FWebsite%2520v5%2FAbout_Us%2Fhow2.jpg&w=1920&q=75" alt=""> 
        </div>
        <div>
            <h1>The inspiration behind it? You.</h1>
            <p>From something as apparent as the number of drawers in your wardrobe, to something as neglected as the perfect illumination of the lights in the corridors, every aspect of our residence design is detailed to add comfort and convenience to your everyday life. That's the kind of thought you deserve, and we put it into it</p>
        </div>
    </div>
    <div>
        <div>
            A splash of teal here. A touch of yellow there. And many other happy shades in between. Wherever you look, you'll see the balance of ageless comfort with a 2020s vibe. The interiors here will put a smile on your face, even when you come back home after a stressful day
        </div>
        <div>
            <h1>It reflects your colours. Your stories.</h1>
        </div>
    </div>
    <div>
        <div>
            <h1>There’s more room in your room</h1>
            <p>Good news! Your belongings will no longer wrestle for the same space. They can happily coexist in your spacious, fully-furnished room. And when you venture out of your room, the resting area, gaming and entertainment zone and dining area will further add a lot of life to your daily life.</p>
        </div>
        <div>
            <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fv1654681234%2FWebsite%2520v5%2FAbout_Us%2Fhow3.jpg&w=1920&q=75" alt="" >
        </div>
    </div>
    <div>
        <div>
            <h1>Quality that speaks for itself</h1>
        </div>
        <div>
            <p>Take it for granted that the lighting fixtures won't fail when you're tiptoeing to the dining area for a midnight snack. And we test our furniture for sturdiness, anticipating you slumping into it on certain days. But don't just go by our assurance. See and experience it for yourself before giving your nod of approval.</p>
        </div>
    </div>
</div>`
document.getElementById("how").style.color = "#60c3ad"
document.getElementById("why").style.color =  "#7d7d7d";
document.getElementById("what").style.color =  "#7d7d7d";
document.getElementById("how").style.borderBottom = "2px solid #60c3ad "
   document.getElementById("why").style.borderBottom = "none"
   document.getElementById("what").style.borderBottom = "none"
}
window.onload = displayWhy();

var indiaMap = document.getElementById("indiaMap");
indiaMap.onscroll = function() {displayMap()};

function displayMap() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var image = document.getElementById("indiaImg");
    image.src = "Screenshot (144).png";
}
}