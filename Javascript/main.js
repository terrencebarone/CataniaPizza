const navOptions = document.getElementsByClassName("logo-font")[0].children;
const mobileNavButton = document.getElementsByClassName("container")[0];







 
const href_array= ["../cataniaPizza.html","../cataniaMenu.html","../cataniaPizza.html#about-hours-flex-container"];

for(let i = 0 ; i < navOptions.length ; i++){

        navOptions[i].addEventListener("click", function(){
            mobileNav.style.display="none";
            mobileNavButton.classList.remove("change");
            menu=false;
            if(i<3){
                window.location.href=href_array[i];
            }
            else if(i===3){
                openHours();
            }
        });

}






const hour_popup= document.getElementById("hours-popup");

function openHours(){
    hour_popup.style.display="block";
    let close_button=document.getElementsByClassName("close-button")[0];
    close_button.addEventListener("click" , function(){
        hour_popup.style.display="none";
    });
}