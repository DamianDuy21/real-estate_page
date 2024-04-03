"use strict";

// NAVBAR TOOGLE IN MOBILE
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")

navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active")
    navToggler.classList.toggle("active")
})

//NAVBAR-LINK ACTIVE
const navbarLinks = document.querySelectorAll(".navbar-link")
navbarLinks.forEach((item) => {
    item.addEventListener("click", () => {
        navbarLinks.forEach((item2) => {
            item2.classList.remove("active")
        })
        item.classList.add("active")
    })
})

// HEADER SCROLL STATE
const header = document.querySelector("[data-header]")
window.addEventListener("scroll", () => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})


//FAVORITE BUTTON TOOGLE
const toggleFavBtns = document.querySelectorAll(".fav-btn")
toggleFavBtns.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})