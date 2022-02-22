let slideIndex = 1;
let timeId = 0;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 0);
}


function minusSlide() {
    showSlides(slideIndex -= 2);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);

    clearInterval(timeId);
    timeId = setInterval(showSlides, 3000, slideIndex += 1);
}