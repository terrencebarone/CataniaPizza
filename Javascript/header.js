
const navBar = document.getElementById("header");
const mobileNav = document.getElementById("mobile-nav");


//when menu is false mobile menu not open
let menu = false;
function myFunction(x) {
    x.classList.toggle("change");
    //menu is not open so open menu
    if(menu===false){
      mobileNav.style.display="block";
      menu=true;
      hour_popup.style.display="none";
    }
    else{
      mobileNav.style.display="none";
      menu=false;
    }
  }