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


  let prev1 = document.querySelector(".prev1")
prev1.onclick = ()=>{
    plusSlides1(-1);
    console.log("hello")
}
let next1 = document.querySelector(".next1");
next1.onclick = ()=>{
    plusSlides1(1);
    console.log("hello")
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  };
  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }

  function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    next1.style.display = "block";
    prev1.style.display = "block"
    if (n == slides1.length) {
        // slideIndex = 1
        next1.style.display = "none";
    }
    if (n == 1) {
        // slideIndex = slides.length;
        prev1.style.display = "none";
    }
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slides1[slideIndex1-1].style.display = "flex";
  }