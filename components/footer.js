const footer = ()=> {
    return` <div id="border">
    <div id="footerFirst">
        <div id="footerfirst">
            <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="">
            <p>Connect with us</p>
            <div>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
        <div>
            <p>About us</p>
            <p>Careers</p>
            <p>Employer home</p>
            <p>Sitemap</p>
        </div>
        <div>
            <p>Help center</p>
            <p>Summons/Notices</p>
            <p>Grievances</p>
            <p>Report issue</p>
        </div>
        <div>
            <p>Privacy policy</p>
            <p>Terms & conditions</p>
            <p>Fraud alert</p>
            <p>Trust & safety</p>
        </div>
        <div id="footerlast">
            <h4>Apply on the go</h4>
            <p>Get real-time job updates on our App</p>
            <div>
                <img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" alt="">
                <img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" alt="">
            </div>
        </div>
    </div>
    <div id="footerLast">
        <div>
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg" alt="">
        </div>
        <div>
            <div><p>All trademarks are the property of their respective owners
            </p>
            <p> All rights reserved © 2022 Info Edge (India) Ltd.</p></div>
        </div>
        <div>
            <p>Our businesses</p>
        </div>
        <div id="footerSlide"></div>
    </div>
</div>`
}

const footerWorking = ()=> {
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
}


export { footer, footerWorking }

