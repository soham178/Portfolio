// Navbar color change on scroll

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
})


// Toggle Menu

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})


// Typing Animation

const words = ["Web Developer", "IT Student", "Full Stack Learner"]
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
    currentWord = words[i];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, j--);
    } else {
        typingElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type()