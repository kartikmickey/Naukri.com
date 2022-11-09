let select = document.getElementById("select");
select.onchange = ()=>{
    let select1 = document.getElementById("select1").style.display = "none";
    select.style.color = "black";
}
let prev = document.querySelector(".prev")
prev.onclick = ()=>{
    plusSlides(-1);
    console.log("hello")
}
let next = document.querySelector(".next");
next.onclick = ()=>{
    plusSlides(1);
    console.log("hello")
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  };
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    next.style.display = "block";
    prev.style.display = "block"
    if (n == slides.length) {
        // slideIndex = 1
        next.style.display = "none";
    }
    if (n == 1) {
        // slideIndex = slides.length;
        prev.style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  }