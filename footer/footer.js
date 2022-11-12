




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