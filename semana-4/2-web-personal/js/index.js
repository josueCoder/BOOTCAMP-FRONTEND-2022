"use strict";

const documentReady=()=>{

    const header=document.getElementById("header");
    const headerNavMenuIcon=document.getElementById("headerNavMenuIcon");   
    const headerNavMenu=document.getElementById("headerNavMenu");
    const headerNavLinks=[...document.querySelectorAll(".header-nav__link")];
    const headerNavLinkListsLinkItems=[...document.querySelectorAll(".header-nav__link-lists__link-item")];

    console.log(headerNavLinkListsLinkItems);


    const headerScroll=()=>{
        header.classList.toggle("header--scroll",window.scrollY>0);
        headerNavMenuIcon.classList.toggle("header-nav__menu-icon--scroll",window.scrollY>0);
        headerNavLinks.forEach((element)=>{
            element.classList.toggle("header-nav__link--scroll",window.scrollY>0);

        });

    }


    const toggleMenu=()=>{
        const headerNavLinkLists=document.getElementById("headerNavLinkLists");
        headerNavLinkLists.classList.toggle("header-nav__link-lists--left-0");


    }
    
    headerNavLinkListsLinkItems.map((element)=>{
        element.addEventListener("click",toggleMenu);
    })
    


    headerNavMenu.addEventListener("click" ,toggleMenu);
    window.addEventListener("scroll",headerScroll);
   
   


}


document.addEventListener("DOMContentLoaded",documentReady);