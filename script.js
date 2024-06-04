'use strict';

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click",function(){
    this.classList.toggle('active');
    header.classList.toggle("active");
}) 

// show go top btn when scroll window to 500px
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll",function(){
    // if(window.scrollY >= 500) {
    //     goTopBtn.classList.add('active')
    // } else {
    //     goTopBtn.classList.remove('active')
    // }
    this.window.scrollY >= 500 ? goTopBtn.classList.add('active'):goTopBtn.classList.remove('active')
})
