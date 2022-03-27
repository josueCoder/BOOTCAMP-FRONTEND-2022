"use strict";

const documentReady=()=>{

const headerNavMenu=document.getElementById("headerNavMenu");

    const openMenu=()=>{
        const headerNavLinkLists=document.getElementById("headerNavLinkLists");
        headerNavLinkLists.classList.toggle("header-nav__link-lists--left-0");


    }


    headerNavMenu.addEventListener("click",openMenu);


}


document.addEventListener("DOMContentLoaded",documentReady);