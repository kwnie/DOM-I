const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
const navMenu = document.querySelectorAll('nav a');
//const navLoop = nav.forEach(index => index.textContent = siteContent["nav"]["nav-item-1"]);

navMenu[0].textContent = siteContent["nav"]["nav-item-1"];
navMenu[1].textContent = siteContent["nav"]["nav-item-2"];
navMenu[2].textContent = siteContent["nav"]["nav-item-3"];
navMenu[3].textContent = siteContent["nav"]["nav-item-4"];
navMenu[4].textContent = siteContent["nav"]["nav-item-5"];
navMenu[5].textContent = siteContent["nav"]["nav-item-6"];

//logo
const navLogo = document.querySelector('#logo-img');
navLogo.setAttribute('src', siteContent["nav"]["img-src"]);

//heading
const heading = document.querySelector('h1');
heading.textContent = siteContent["cta"]["h1"];
///////////add line break//////

//button
const getStartedButton = document.querySelector('button');
getStartedButton.textContent = siteContent["cta"]["button"];

//heading img
const headingImg = document.querySelector('#cta-img');
headingImg.setAttribute('src', siteContent["cta"]["img-src"]);

//small headings
const smallHeading = document.querySelectorAll('h4');
smallHeading[0].textContent = siteContent["main-content"]["features-h4"];
smallHeading[1].textContent = siteContent["main-content"]["about-h4"];
smallHeading[2].textContent = siteContent["main-content"]["services-h4"];
smallHeading[3].textContent = siteContent["main-content"]["product-h4"];
smallHeading[4].textContent = siteContent["main-content"]["vision-h4"];

//main content 
const mainContent = document.querySelectorAll('.text-content p');
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

//middle image
const middleImage = document.querySelector('.middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact heading
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

//contact info
const contact = document.querySelectorAll('.contact p')
const address = contact[0].textContent = siteContent["contact"]["address"];
////////address.split("\n");
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];

//change nav color
//navMenu.forEach(index => index.style.color = 'green');

//add 2 items to nav
const blog = document.createElement('a');
blog.textContent = "Blog";
document.querySelector('nav').appendChild(blog);

const mission = document.createElement('a');
blog.textContent = "Mission";
document.querySelector('a').prepend(mission);






