window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var navTwo = document.getElementById("nav-link-two");
var navThree = document.getElementById("nav-link-three");
var navFour = document.getElementById("nav-link-four");
var navFive = document.getElementById("nav-link-five");
var navSix = document.getElementById("nav-link-six");
var sticky = navbar.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {

        navbar.classList.add("sticky");
        document.getElementById("navbar").style.background = "#fff" ;

        navTwo.style.color = "#333";
        navThree.style.color = "#333";
        navFour.style.color = "#333";
        navFive.style.color = "#333";
        navSix.style.color = "#333";
        

    }else{
        navbar.classList.remove("sticky");
        document.getElementById("navbar").style.background = "#000";

        navTwo.style.color = "#fff";
        navThree.style.color = "#fff";
        navFour.style.color = "#fff";
        navFive.style.color = "#fff";
        navSix.style.color = "#fff";
        
    }
}

