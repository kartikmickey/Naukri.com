console.log("connected");
// import { footer, footerWorking } from "../components/footer.js"
//     let foot = document.querySelector("footer");
//     foot.innerHTML = footer();
//     footerWorking()

    import { navbar, login, navbarWorking } from "../components/navbar.js"
    let nav = document.getElementById("navbar");
    // let nav = document.querySelector("body");
    nav.innerHTML = navbar();
    navbarWorking()
    let log = document.getElementById("myForm");
    log.innerHTML = login()




let data = [
    {   
        id : 1,
        company : "Genpact",
        catagory : "Global professional service firm",
        rating:4.2 +" "+"|",
        review:"3.6K+"+" "+"reviews",
        type:"Technology",
        image : "https://img.naukimg.com/logo_images/groups/v2/42932.gif"
    },
    {
        id : 2,
        company : "Kyndryl",
        catagory : "A digital first approach to IT management",
        rating:4.4+" "+"|",
        review:"3.7K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/5462642.gif"
    },
    {   
        id : 3,
        company : "Nagarro",
        catagory : "Leader in digital product engineering.",
        rating:4.9+" "+"|"+"32.7K+"+" "+"reviews",
        review:"",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/9558.gif"
    }, {   
        id : 4,
        company : "Luxoft",
        catagory : "DXC Technology Company.",
        rating:3.8+" "+"|",
        review:"377"+" "+"reviews",
        
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/4264.gif"
    }, {   
        id : 5,
        company : "Cognizant",
        catagory : "Leading ITeS company with global presence.",
        rating:4.6+" "+"|",
        review:"33K+"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/4156.gif"
    }, {   
        id : 6,
        company : "Applied Materials",
        catagory : "Leader in materials engineering solutions.",
        rating:4.8+" "+"|",
        review:"3.0K+"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/1574056.gif"
    }, {   
        id : 7,
        company : "Accolite Digital",
        catagory : "Digital transformation services provider.",
        rating:4.0+" "+"|",
        review:"41K+"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/4577755.gif"
    }, {   
        id : 8,
        company : "Incedo",
        catagory : "US-based consulting & technology services firm.",
        rating:4.1+" "+"|",
        review:"3.2K+"+" "+"reviews",
        type:"BFSI",

        image : "https://img.naukimg.com/logo_images/groups/v2/1527726.gif"
    }, {   
        id : 9,
        company : "FIS",
        catagory : "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.",
        rating:4.5+" "+"|",
        review:"38.7K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/21746.gif"
    }, {   
        id : 10,
        company : "ICE",
        catagory : "Cloud-based platform for mortgage finance industry.",
        rating:4.8+" "+"|",
        review:"30.7K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/6206135.gif"
    }, {   
        id : 11,
        company : "Capgemini",
        catagory : "Global leader in technology services.",
        rating:3.9+" "+"|",
        review:"36K+"+" "+"reviews",
        type:"BFSI",

        image : "https://img.naukimg.com/logo_images/groups/v2/1288.gif"
    }, {   
        id : 12,
        company : "Netcracker",
        catagory : "Global leader in BSS, OSS and cloud.",
        rating:3.8+" "+"|",
        review:"56.2K+"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/4614431.gif"
    }, {   
        id : 13,
        company : "Coforge",
        catagory : "Global digital services and solutions provider.",
        rating:3.5+" "+"|",
        review:"31.7K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/233334.gif"
    }, {   
        id : 14,
        company : "Datamatics",
        catagory : "Global digital solutions & technology company",
        rating:4.0+" "+"|",
        review:"1.7K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/315118.gif"
    },
    {   
        id : 15,
        company : "ICICI Bank",
        catagory : "Leading private sector bank in India.",
        rating:3.8+" "+"|",
        review:"3K+"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/44512.gif"
    },
    {   
        id : 16,
        company : "Airtel",
        catagory : "Leading global telecom company.",
        rating:4.6+" "+"|",
        review:"3.1K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/126896.gif"
    },
    {   
        id : 17,
        company : "Persistent",
        catagory : "Trusted global solutions company.",
        rating:4.3+" "+"|",
        review:"5.1K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/3835862.gif"
    },
    {   
        id : 18,
        company : "Amazon",
        catagory : "World's largest Internet company.",
        rating:4.6+" "+"|",
        review:"3.7K+"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/398058.gif"
    },
    {   
        id : 19,
        company : "virtusa",
        catagory : "IT services company since 1996.",
        rating:4.1+" "+"|",
        review:"3K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/1186200.gif"
    },
    {   
        id : 20,
        company : "Biz2Credit",
        catagory : "Leading the #FinTech Revolution.",
        rating:3.8+" "+"|",
        review:"567"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/4582763.gif"
    },
    {   
        id : 21,
        company : "Synechron",
        catagory : "Information technology company.",
        rating:3.4+" "+"|",
        review:"6.2K+"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/419316.gif"
    },
    {   
        id : 22,
        company : "Xoriant",
        catagory : "Software development & technology services firm.",
        rating:4.4+" "+"|",
        review:"37K+"+" "+"reviews",
        type:"IT",

        image : "https://img.naukimg.com/logo_images/groups/v2/2436002.gif"
    },
    {   
        id : 23,
        company : "Oracle",
        catagory : "Cloud technology company since 1977.",
        rating:4.1+" "+"|",
        review:"30K+"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/18850.gif"
    },
    {   
        id : 24,
        company : "Cbts",
        catagory : "Leading technology provider.",
        rating:3.7+" "+"|",
        review:"980"+" "+"reviews",
        type:"BPM",

        image : "https://img.naukimg.com/logo_images/groups/v2/4654342.gif"
    },
    {   
        id : 25,
        company : "JPMorgan Chase Bank",
        catagory : "Leader in financial services.",
        rating:3.9+" "+"|",
        review:"127K+"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/240936.gif"
    },
    {   
        id : 26,
        company : "Infosys",
        catagory : "Global leader in next-gen digital services.",
        rating:4.3+" "+"|",
        review:"310K"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/13832.gif"
    },
    {   
        id : 27,
       company: " ",
       review:"3.7K+"+" "+"reviews",
        catagory : "Make the most out of Naukri by creating your job profile for free!",
        rating:4.0+" "+"|",
        type:"BFSI",

        image : "https://static.naukimg.com/s/0/0/i/registerLock.png"
    },
    {   
        id : 28,
        company : "WNS Holdings",
        catagory : "Leading business process management company.",
        rating:4.4+" "+"|",
        review:"90K+"+" "+"reviews",
        type:"Technology",

        image : "https://img.naukimg.com/logo_images/groups/v2/4264.gif"
    },
    
   
      ];




console.log(data)


//mouse hover



let body = document.getElementById("append_div");
  function append(products) {
  body.innerHTML = null

  products.forEach(function (el,id) {

    let parent = document.createElement('div');
    parent.classList.add("appparent")
    

    let td1 = document.createElement('img');
    td1.classList.add("appimg")

    td1.src = el.image;

    let type = document.createElement("span")
    type.innerText=el.type

    let indiv = document.createElement('div');
    indiv.classList.add("appindiv")
    indiv.style.width="80%";
    indiv.style.height="34%"
    indiv.style.border="1px aolod red"

    let comp = document.createElement('span');
    comp.classList.add("comp")
       comp.innerHTML = el.company;
      let rateindiv = document.createElement("div")
       rateindiv.classList="rateindiv"

    let starimg=document.createElement("img");
    starimg.src="https://static.naukimg.com/s/7/103/i/star.bc60c2fe.svg"
    starimg.classList="star_img"

    let rating = document.createElement("p");
    rating.innerText=el.rating
    rating.classList="rating"
    
    let review = document.createElement("span")
    review.innerText=el.review;
    review.classList="review"

    let rtext=document.createElement("p");
    rtext.innerText="review"
    rtext.classList="rtext"

    let cata = document.createElement('p');
    cata.innerHTML = el.catagory;
    cata.classList="cata"

   let btn = document.createElement('button');
    btn.textContent = "View jobs";
    btn.classList="appbtn"
    btn.addEventListener('click', function () {
      remove(id)
    })
    rateindiv.append(starimg,rating,review)
    indiv.append(comp,rateindiv)
    parent.append(td1,indiv,cata,btn);
    body.append(parent)
  })
}

append(data)
//filter part//=>///////////////////....................................

const selectBtn1=document.querySelector(".select_btn")
const selectBtn2=document.getElementById("sl2")
const selectBtn3=document.getElementById("sl3")
const selectBtn4=document.getElementById("sl4")
const selectBtn5=document.getElementById("sl5")


const items=document.querySelectorAll(".items");
// console.log(selectBtn,items)
selectBtn1.addEventListener("click", ()=>{
    selectBtn1.classList.toggle("close")
})
selectBtn2.addEventListener("click", ()=>{
    selectBtn2.classList.toggle("close")
})
selectBtn3.addEventListener("click", ()=>{
    selectBtn3.classList.toggle("close")
})
selectBtn4.addEventListener("click", ()=>{
    selectBtn4.classList.toggle("close")
})
selectBtn5.addEventListener("click", ()=>{
    selectBtn5.classList.toggle("close")
})
items.forEach( items =>{
    items.addEventListener("click",()=>{
        items.classList.toggle("checked")
    })
})
const ITsec = document.getElementById("IT");
ITsec.addEventListener("click", function () {
  append(filterdata1);
//   ITsec.setAttribute.toggle("id","IT1")
    
      })
  let filterdata1 = data.filter(function(epl,id){
    return "IT"==epl.type;

});
const BFSIsec = document.getElementById("BFSI");
BFSIsec.addEventListener("click", function () {
  append(filterdata2);
    
        
      })
  let filterdata2 = data.filter(function(any,id){
    return "BFSI"==any.type;

});

const BPMsec = document.getElementById("BPM");
BPMsec.addEventListener("click", function () {
  append(filterdata3);
    
        
      })
  let filterdata3 = data.filter(function(el,id){
    return "BPM"==el.type;

});
const TECHsec = document.getElementById("TECH");
TECHsec.addEventListener("click", function () {
  append(filterdata4);
    
        
      })
  let filterdata4 = data.filter(function(el,id){
    return "Technology"==el.type;

});

////footer part will be here

// import { footer, footerWorking } from "../components/footer.js"
// // ../components/footer.js
//     let foot = document.querySelector("footer");
//     foot.innerHTML = footer();
//     footerWorking()




    //  let logo = document.getElementById("logo");
    // logo.onclick = ()=>{
    //     window.location.href="../home/home.html"
    // }


    let footerSlide = document.getElementById("footerSlide");

    function carousel(){
        let images = [
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/hirist.png",
            "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png"
        ]
    
        let imgE1 = document.createElement("img");
        let imgE2 = document.createElement("img"); 
        let imgE3 = document.createElement("img");
         let imgE4 = document.createElement("img");
    
         imgE1.src = images[0];
         imgE2.src = images[1];
         imgE3.src = images[2];
         imgE4.src = images[3];
         footerSlide.append(imgE1, imgE2, imgE3, imgE4);
         let i= 1;
    
         setInterval(function(){
            if(i== 4){
                i= 0;
            }
            imgE1.src = images[i];
         imgE2.src = images[1+i];
         imgE3.src = images[2+i];
         imgE4.src = images[3+i];
         footerSlide.append(imgE1, imgE2, imgE3, imgE4);
         i++;
         }, 2000)
    
    }
    carousel()
