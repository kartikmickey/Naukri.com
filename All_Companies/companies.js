console.log("connected");


let data = [
    {   
        id : 1,
        company : "Genpact",
        catagory : "Global professional service firm",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/42932.gif"
    },
    {
        id : 2,
        company : "Kyndryl",
        catagory : "A digital first approach to IT management",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/5462642.gif"
    },
    {   
        id : 3,
        company : "Nagarro",
        catagory : "Leader in digital product engineering.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/9558.gif"
    }, {   
        id : 4,
        company : "Luxoft",
        catagory : "DXC Technology Company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4264.gif"
    }, {   
        id : 5,
        company : "Cognizant",
        catagory : "Leading ITeS company with global presence.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4156.gif"
    }, {   
        id : 6,
        company : "Applied Materials",
        catagory : "Leader in materials engineering solutions.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/1574056.gif"
    }, {   
        id : 7,
        company : "Accolite Digital",
        catagory : "Digital transformation services provider.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4577755.gif"
    }, {   
        id : 8,
        company : "Incedo",
        catagory : "US-based consulting & technology services firm.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/1527726.gif"
    }, {   
        id : 9,
        company : "FIS",
        catagory : "FIS is hiring 3 to 10yrs exp. in C++ & Mumps developer.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/21746.gif"
    }, {   
        id : 10,
        company : "ICE",
        catagory : "Cloud-based platform for mortgage finance industry.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/6206135.gif"
    }, {   
        id : 11,
        company : "Capgemini",
        catagory : "Global leader in technology services.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/1288.gif"
    }, {   
        id : 12,
        company : "Netcracker",
        catagory : "Global leader in BSS, OSS and cloud.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4614431.gif"
    }, {   
        id : 13,
        company : "Coforge",
        catagory : "Global digital services and solutions provider.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/233334.gif"
    }, {   
        id : 14,
        company : "Datamatics",
        catagory : "Global digital solutions & technology company",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/315118.gif"
    },
    {   
        id : 15,
        company : "ICICI Bank",
        catagory : "Leading private sector bank in India.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/44512.gif"
    },
    {   
        id : 16,
        company : "Airtel",
        catagory : "Leading global telecom company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/126896.gif"
    },
    {   
        id : 17,
        company : "Persistent",
        catagory : "Trusted global solutions company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/3835862.gif"
    },
    {   
        id : 18,
        company : "Amazon",
        catagory : "World's largest Internet company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/398058.gif"
    },
    {   
        id : 19,
        company : "virtusa",
        catagory : "IT services company since 1996.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/1186200.gif"
    },
    {   
        id : 20,
        company : "Biz2Credit",
        catagory : "Leading the #FinTech Revolution.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4582763.gif"
    },
    {   
        id : 21,
        company : "Synechron",
        catagory : "Information technology company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/419316.gif"
    },
    {   
        id : 22,
        company : "Xoriant",
        catagory : "Software development & technology services firm.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/2436002.gif"
    },
    {   
        id : 23,
        company : "Oracle",
        catagory : "Cloud technology company since 1977.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/18850.gif"
    },
    {   
        id : 24,
        company : "Cbts",
        catagory : "Leading technology provider.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4654342.gif"
    },
    {   
        id : 25,
        company : "JPMorgan Chase Bank",
        catagory : "Leader in financial services.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/240936.gif"
    },
    {   
        id : 26,
        company : "Infosys",
        catagory : "Global leader in next-gen digital services.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/13832.gif"
    },
    {   
        id : 27,
       
        catagory : "Make the most out of Naukri by creating your job profile for free!",
        
        image : "https://static.naukimg.com/s/0/0/i/registerLock.png"
    },
    {   
        id : 28,
        company : "WNS Holdings",
        catagory : "Leading business process management company.",
        
        image : "https://img.naukimg.com/logo_images/groups/v2/4264.gif"
    },
    
   
      ];


//       Nagarro
// Nagarro
// rating4.52.5K+ reviews
// Leader in digital product engineering.

// View jobs
// Biz2Credit
// Biz2Credit
// rating4.4173 reviews
// Leading the #FinTech Revolution.

// View jobs


console.log(data)




let body = document.getElementById("append_div");
  function append(products) {
  body.innerHTML = null

  products.forEach(function (el, id) {

    let parent = document.createElement('div');
    parent.classList.add("appparent")

    let td1 = document.createElement('img');
    td1.classList.add("appimg")

    td1.src = el.image;

    let indiv = document.createElement('div');
    indiv.classList.add("appindiv")
    indiv.style.backgroundColor="grey"
    indiv.style.width="98%";
    indiv.style.height="25%"
    indiv.style.border="1px aolod red"

    let td2 = document.createElement('h2');
    td2.classList.add("appcat")
       td2.innerHTML = el.company;
       

    let td3 = document.createElement('p');
    td3.innerHTML = el.catagory;

   let td4 = document.createElement('button');
    td4.textContent = "View jobs";
    td4.addEventListener('click', function () {
      remove(id)
    })
    parent.append(td1,indiv,td2,td3,td4);
    body.append(parent)
  })
}

append(data)