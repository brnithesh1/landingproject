/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var ids = ["section1","section2", "section3"];


/**
 * End Global Variables
 * Start Helper Function
 * 
*/
function navBuild(value, index) {
    selectedelement = document.querySelector("#navbar__list");
    const listitem = document.createElement('li');
    document.write('#'+value);
    const selectedsectionelement= document.querySelector("#"+value);
    listitem.innerHTML = selectedsectionelement.dataset.name;
    listitem.style.color = 'red';
    //listitem.style.backgroundColor='black'
    selectedelement.appendChild(listitem);
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    } 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
ids.forEach(navBuild);




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
    document.querySelector('li').addEventListener('click', function () {
        window.scrollTo(0,
            findPosition(document.getElementById("section1")));
    }
    );


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


