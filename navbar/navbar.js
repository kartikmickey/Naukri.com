   


   let  navbar=document.querySelector("#navbar")
   window.onscroll=function(){
   navbar.classList.add("sticky")
   }
   let inside=document.querySelector(".inside");
   let jobs=document.querySelector(".jobs");
   jobs.onclick=function(){
      myfirstclick()

   }
   jobs.onmouseleave=function(){
     
      inside.setAttribute("display","none")
      // inside.innerHTML=null;
      // myfirstclick()
   }
   // inside.innerHTML=null;
   // jobs.onclick=function(){
   //    myfirstclick()
   // }
   function myfirstclick(){
      
   inside.classList.toggle("hideandsick");
   console.log("jjj")
   }

 let insidee=document.querySelector(".insidee");
 let companies=document.querySelector(".companies")
 companies.onclick=function(){
   myfirstclick2()
 }
   function myfirstclick2(){
      
      insidee.classList.toggle("hideandsick2");
      console.log("jjj")
      }

      
      let serinside=document.querySelector(".serinside")
      let services=document.querySelector(".services")
      services.onclick=function(){
         myfirstclick3()
      }
      function myfirstclick3(){
         serinside.classList.toggle("hideandsick3");
         console.log("ooo")
      }

      let eminside=document.querySelector(".eminside")
      let emp=document.querySelector(".emp")
      emp.onclick=function(){
         myfirstclick4()
      }
      function myfirstclick4(){
         eminside.classList.toggle("hideandsick4");
         console.log("ooo")
      }

      // let login=document.querySelector("#btn1");
      // login.onclick=function(){
      //    showallthings()
      // }
       function showallthings(){
      document.querySelector(".overlay").classList.add("showoverlay")
        document.querySelector(".form-popup").classList.add("showlogin")
       }
       function removeitm(){
         document.querySelector(".overlay").classList.remove("showoverlay")
         document.querySelector(".form-popup").classList.remove("showlogin")
       }