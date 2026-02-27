// Navbar color change on scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle Menu

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Animation

const words = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
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
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();


//Slide in From Left + Right in About Section

const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
            } else {
                aboutSection.classList.remove("show");
            }
        });
    },
    {threshold: 0.4}
);

observer.observe(aboutSection);


// Stagged fade + Slide Up Animation in Skills Section

const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
    skillCards.forEach((card, index) => {
        const trigger = window.innerHeight * 0.85;
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 100)
        } else {
            card.classList.remove("show")
        }
    });
});


// Timeline Line Animation for Education Section

const educationSection = document.querySelector("#education");
const timeline = document.querySelector(".timeline");
const cards = document.querySelectorAll(".timeline-card");

function handleScroll() {
    const sectionTop = educationSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
        timeline.classList.add("active");

        cards.forEach((card, index) =>{
            setTimeout(() => {
                card.classList.add("show");
            }, index * 200);
        });
    } else{
        timeline.classList.remove("active");
        cards.forEach(card => card.classList.remove("show"));
    }
}

window.addEventListener("scroll", handleScroll);


//  Scroll Animation for the Contact Section 

const contactSection = document.querySelector(".contact");
const contactImage = document.querySelector(".contact-image");
const contactForm = document.querySelector(".contact-form");

const ContactObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                contactImage.classList.add("show");

                setTimeout(() => {
                    contactForm.classList.add("show");
                }, 200);

            } else {
                contactImage.classList.remove('show')
                contactForm.classList.remove('show')
            }
        });

    },
    {
        threshold: 0.3
    }
);

ContactObserver.observe(contactSection);