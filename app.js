//hamburger menu

function menu() {
    var x = document.getElementById("nav-links");
    if (x.style.display === 'grid') {
        x.style.display = 'none';
    }
    else {
        x.style.display = 'grid';

    }
}

//slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("package");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " active";
}

//accordian

let acc = document.getElementsByClassName("question");
let i;
console.log(acc);
console.log(acc[0].nextElementSibling);

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        }
        else {
            answer.style.display = "block";
        }
    }
    );
}
