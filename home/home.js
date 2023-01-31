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



  let prev3 = document.querySelector(".prev3")
prev3.onclick = ()=>{
    plusSlides3(-1);
    console.log("hello")
}
let next3 = document.querySelector(".next3");
next3.onclick = ()=>{
    plusSlides3(1);
    console.log("hello")
}

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  };
  function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }

  function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    next3.style.display = "block";
    prev3.style.display = "block"
    if (n == slides3.length) {
        // slideIndex = 1
        next3.style.display = "none";
    }
    if (n == 1) {
        // slideIndex = slides.length;
        prev3.style.display = "none";
    }
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
    }
    slides3[slideIndex3-1].style.display = "block";
  }


  let prev4 = document.querySelector(".prev4")
  prev4.onclick = ()=>{
      plusSlides4(-1);
      console.log("hello")
  }
  let next4 = document.querySelector(".next4");
  next4.onclick = ()=>{
      plusSlides4(1);
      console.log("hello")
  }
  
  let slideIndex4 = 1;
  showSlides4(slideIndex4);
  
  function plusSlides4(n) {
      showSlides4(slideIndex4 += n);
    };
    function currentSlide4(n) {
      showSlides4(slideIndex4 = n);
    }
  
    function showSlides4(n) {
      let i;
      let slides4 = document.getElementsByClassName("mySlides4");
      next4.style.display = "block";
      prev4.style.display = "block"
      if (n == slides4.length) {
          // slideIndex = 1
          next4.style.display = "none";
      }
      if (n == 1) {
          // slideIndex = slides.length;
          prev4.style.display = "none";
      }
      for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
      }
      slides4[slideIndex4-1].style.display = "flex";
    }
  

    import { footer, footerWorking } from "../components/footer.js"
    let foot = document.querySelector("footer");
    foot.innerHTML = footer();
    footerWorking()

    import { navbar, login, navbarWorking } from "../components/navbar.js"
    let nav = document.getElementById("navbar");
    // let nav = document.querySelector("body");
    nav.innerHTML = navbar();
    navbarWorking()
    let log = document.getElementById("myForm");
    log.innerHTML = login()
    //  let logo = document.getElementById("logo");
    // logo.onclick = ()=>{
    //     window.location.href="../home/home.html"
    // }

    let type = document.getElementById("type");
    type.onclick= ()=>{
      window.location.href="../jobs/index.html"
    }

    let heading2 = document.getElementById("heading2")
    heading2.onclick= ()=>{
      // console.log("hello")
      // window.location.href="../jobs/index.html"
      window.location.href="../All_Companies/companies.html"
    }
    let heading3 = document.getElementById("heading3")
    heading3.onclick= ()=>{
      // console.log("hello")
      // window.location.href="../jobs/index.html"
      window.location.href="../All_Companies/companies.html"
    }