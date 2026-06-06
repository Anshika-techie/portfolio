const roles = [
    "Python Developer",
    "Django Developer",
    "Java Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        currentText += roles[roleIndex].charAt(charIndex);

        document.getElementById("typing").textContent = currentText;

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(() => {

            currentText = "";
            charIndex = 0;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

            typeEffect();

        },1500);
    }
}

typeEffect();

/* SCROLL ANIMATION */

const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    faders.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});