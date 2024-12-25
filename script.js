const bg = document.getElementById("b");
const mode = document.getElementById("mode");
const mailb = document.getElementById("btn2");
const form = document.querySelector("form");
const close = document.getElementById("close");
const menubar = document.getElementById("menu-icon");
menubar.addEventListener("click", function () {
    bg.classList.toggle("show");
    var iE = document.getElementById('IE');
    if (iE.classList.contains('bx-menu')) {
        iE.classList.remove('bx-menu');
        iE.classList.add('bx-x');
    } else {
        iE.classList.remove('bx-x');
        iE.classList.add('bx-menu');
    }
});


mode.addEventListener("click", function () {
    bg.classList.toggle("light");
    var iE = document.getElementById('ie');
    if (iE.classList.contains('bxs-moon')) {
        iE.classList.remove('bxs-moon');
        iE.classList.add('bxs-sun');
    } else {
        iE.classList.remove('bxs-sun');
        iE.classList.add('bxs-moon');
    }
});
mailb.addEventListener("click", function () {
    bg.classList.toggle("contactme");
});
close.addEventListener("click", function () {
    bg.classList.toggle("contactme");
});

const projects = document.querySelectorAll('.project-grid');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.1 });

projects.forEach((project) => {
    observer.observe(project);
});