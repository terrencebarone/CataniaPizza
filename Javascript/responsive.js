const easy_click = document.getElementById("easy-click");
const easy_click_container = document.getElementById("easy-click-container");
const landing_flex_container= document.getElementById("landing-flex-container");


//When window is resized
window.addEventListener("resize", function(){
    if(window.innerWidth<700){
        easy_click.style.display="block";
        if(landing_flex_container.children.length>1){
            landing_flex_container.removeChild(landing_flex_container.lastChild);
        }
        if(easy_click.children.length===0){
            easy_click.appendChild(easy_click_container);
        }
    }
    else if(window.innerWidth>700){
        easy_click.style.display="none";
        landing_flex_container.appendChild(easy_click_container);
    }
})


onload();
//on load
function onload(){
    if(window.innerWidth<700){
        easy_click.style.display="block";
        if(landing_flex_container.children.length>1){
            landing_flex_container.removeChild(landing_flex_container.lastChild);
        }
        if(easy_click.children.length===0){
            easy_click.appendChild(easy_click_container);
        }
    }
    else if(window.innerWidth>700){
        easy_click.style.display="none";
        landing_flex_container.appendChild(easy_click_container);
    }
}