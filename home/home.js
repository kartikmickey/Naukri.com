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



  let prev2 = document.querySelector(".prev2")
prev2.onclick = ()=>{
    plusSlides2(-1);
    console.log("hello")
}
let next2 = document.querySelector(".next2");
next2.onclick = ()=>{
    plusSlides2(1);
    console.log("hello")
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  };
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }

  function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot");
    next2.style.display = "block";
    prev2.style.display = "block"
    if (n == slides2.length) {
        // slideIndex = 1
        next2.style.display = "none";
    }
    if (n == 1) {
        // slideIndex = slides.length;
        prev2.style.display = "none";
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "grid";
    dots[slideIndex2-1].className += " active";
  }