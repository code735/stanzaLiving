<img  src="https://res.cloudinary.com/stanza-living/image/upload/v1668526144/Website%20v5/Logo/Stanza_Living_Digital_Logo_white_new.png"
alt="" width="300px">

<h1> StanzaLiving Clone </h1>


-*BEGIN*-

<h3> About StanzaLiving </h3>

Stanzaliving provides apartments, co-living and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties. 

<h3> Project Goal </h3>
Our goal was to replicate both the frontend and funtionality of StanzaLiving to the maximum, in 5 days, using only HTML, JS and CSS ( - no frameworks ). The implemntion of the user flow was cruicial in taking the project to completion.   

<br><br>
![snips from project 1](./readme_homepage.png "Home Page, Property Listing Page and Property Page")

<br><br>

![snips from porject 2](./readme_homepage2.png "About us, Partner with Us and Our Team Page")

<h3> User Flow Path <h3> 

Landing page **>** Sign in **>** Make a search (property type + area) **>** House Listing Page **>** User applies filters/sorting **>** Reach Individual Property Page **>**  Make a callback request 

<h3> Pages Implemented </h3>

* Home page + Global Search function  
* About us 
* Partner with Us
* Our Team 
* Property Listing Page 
* Individual Property Page 
* Wishlist 
* Callback Page
* Sign up/Sign in 

<h3> Learnings and Roadblocks</h3>

**API** <br>
The foremost challenege was to find API to fetch data, that would create the property-area link for the project.  Even after rigouous searching around, we couldnt find a free API source and had to resort to using Json-Server. We extracted property data for popular cities and fetched them from mock server.  

**Google Maps** <br>
We used google maps API to embed a google map iframe into our project. The house lisiting page is made to change map location dynamically on hovering across different houses. 

**CSS Animations** <br>
We learnt about CSS animations and have used them generously thoughout the project. We also implemented interactive popups that get triggered with javascript on events. 

**Local Storage** <br>
Local storage was primarily used for sign up/sign in feature and to transition from one page to the next. Data from one page is stored in local storage on an event. This data is then used to populate the next page in the userflow path. 


Thanks for reading :) [Stanzaliving Clone](https://code735.github.io/stanzaLiving/)


-*END*-