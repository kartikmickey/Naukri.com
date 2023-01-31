let staticlist=document.querySelector(".static-list")
   window.onscroll=function(){
    staticlist.classList.add("sticky")
   // navbar.classList.("navscroll")
   }

   // let form=document.querySelector("form").addEventListener("submit",formfill)

 let btn=document.querySelector("#btn").addEventListener("click",formfill)
   function formfill(event){
      console.log("jdkdlk")
      event.preventDefault()
      
      let name=document.querySelector("#name").value;
      let email=document.querySelector("#email").value;
      let pass=document.querySelector("#password").value;
      let mobile=document.querySelector("#mobile").value;
      let obj={
         name,
         email,
         pass,
         mobile,
      }
      localStorage.setItem("key",JSON.stringify(obj))
      alert("sign-up successful")
      

   }

   let logo = document.getElementById("logo");
   logo.onclick = ()=>{
       window.location.href="../home/home.html"
   }