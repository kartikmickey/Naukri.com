let divv = document.querySelector("#container3");
window.onscroll = function () {
  divv.classList.add("sticky");
};

const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".items");
// console.log(selectBtn, items);

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((items) => {
  items.addEventListener("click", () => {
    items.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let btnText = document.querySelector(".btn-text");
    // console.log(checked);
    if (checked.innerText == "Pune") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});
//-----------------------------------------------//
const selectBtn2 = document.querySelector("#select-btn2");
const items1 = document.querySelectorAll("#items");
// console.log(selectBtn2, items1);

selectBtn2.addEventListener("click", () => {
  selectBtn2.classList.toggle("open");
});

items1.forEach((items1) => {
  items1.addEventListener("click", () => {
    items1.classList.toggle("checked1");

    let checked1 = document.querySelectorAll(".checked1");
    let btnText1 = document.querySelector(".btn-text1");
    // console.log(checked1);
    if (checked1.innerText == "Pune") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});
//-------------------------------------------------------------//
const selectBtn3 = document.querySelector("#select-btn3");
const items2 = document.querySelectorAll("#items");
// console.log(selectBtn2, items1);

selectBtn3.addEventListener("click", () => {
  selectBtn3.classList.toggle("open");
});

items2.forEach((items2) => {
  items2.addEventListener("click", () => {
    items2.classList.toggle("checked1");

    let checked1 = document.querySelectorAll(".checked1");
    let btnText1 = document.querySelector(".btn-text1");
    // console.log(checked1);
    if (checked1.innerText == "") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});
//----------------------------------------------------------//
const selectBtn4 = document.querySelector("#select-btn4");
const items4 = document.querySelectorAll("#items");
// console.log(selectBtn2, items1);

selectBtn4.addEventListener("click", () => {
  selectBtn4.classList.toggle("open");
});

items4.forEach((items4) => {
  items4.addEventListener("click", () => {
    items4.classList.toggle("checked1");

    let checked1 = document.querySelectorAll(".checked1");
    let btnText1 = document.querySelector(".btn-text1");
    // console.log(checked1);
    if (checked1.innerText == "") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});
//------------------------------------------------------//
const selectBtn5 = document.querySelector("#select-btn5");
const items5 = document.querySelectorAll("#items");
// console.log(selectBtn2, items1);

selectBtn5.addEventListener("click", () => {
  selectBtn5.classList.toggle("open");
});

items5.forEach((items5) => {
  items5.addEventListener("click", () => {
    items5.classList.toggle("checked1");

    let checked1 = document.querySelectorAll(".checked1");
    let btnText1 = document.querySelector(".btn-text1");
    // console.log(checked1);
    if (checked1.innerText == "") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});

//----------------------------------------------------------------------//

const parent_div = document.getElementById("container2");

let data = [
  {
    title: "WEB ANALYST/WEB TAGGING DEVELOPER",
    company: "Infosys",
    reviews: "14 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/infosys_nov13.gif",
    experience: "From 3 to 5 year(s) of experience",
    salary: "Not Disclosed by Recruiter",
    location: "Bengaluru",
    description:
      "JavaScriptWeb - AnalyticsData - AnalyticsDigital - marketing - RESTful APIs -HTML - JQuery - Analytics",
    department: "Engineering - Software & QA",
    date: "09 nov 2022",
  },
  {
    title: "Dot Net Full Stack Development Application Developer",
    company: "Accenture ",
    reviews: "122 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/Accen_nov20.gif",
    experience: "2-5 Yrs",
    salary: "4,00,000 -9,00,000",
    location: "Pune",
    description:
      "Business - processWeb - application development - Front end - Database design - Debugging",
    department: "Engineering - Software & QA",
    date: "05 nov 2022",
  },
  {
    title: "Senior Software Engineer",
    company: "Mindtree",
    reviews: "3015 Reviews",
    image: "https://img.naukimg.com/logo_images/groups/v1/47784.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description: "Web Api - ASP.NET - MVC",
    department: "Engineering - Software & QA",
    date: "01 nov 2022",
  },
  {
    title: "Senior DevOps Engineer",
    company: "Flipkart",
    reviews: "3015 Reviews",
    image: "https://img.naukimg.com/logo_images/groups/v1/533532.gif",
    experience: "2-5 Yrs",
    salary: "5,00,000 - 8,00,000",
    location: "Bengaluru",
    description:
      "Automation - devops - Apache - Monitoring - Recruitment - continuous integration - IT infrastructure - Cloud - Load balancing - Python",
    department: "Engineering - Software & QA",
    date: "01 nov 2022",
  },
  {
    title: "Application Developer: Java Full Stack",
    company: "IBM",
    reviews: "1524 Reviews",
    image: "https://img.naukimg.com/logo_images/groups/v1/19288.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description:
      "Backend - Front end - MySQL - Oracle - SQL - Hibernate - RDBMS - Web development - DBMS - Apache - Monitoring - Recruitment",
    department: "Engineering - Software & QA",
    date: "01 nov 2022",
  },
  {
    title: "Frontend Developer",
    company: "Trukker Technologies",
    reviews: "4 Reviews",
    image: "https://img.naukimg.com/logo_images/groups/v1/6543131.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Vadodara",
    description:
      "Role: ServiceNow Developer Experience:4 years to 7 Years.4+ Years of experience with Se...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "16 nov 2022",
  },
  {
    title: "HCL Hiring Software Engineer(Java),Bangalore,Chennai",
    company: "Mphasis",
    reviews: "4 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/mphasis_apr19.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description:
      "You have experience with Object-Oriented PHP, MySQL, HTML, JavaScript, Git, Linux comma..",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "25 oct 2022",
  },
  {
    title: "Hiring For Senior Java Developer",
    company: "HCL",
    reviews: "4 Reviews",
    image: "https://img.naukri.com/logo_images/v3/838417.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Bengaluru",
    description:
      "5+ years of experience in Service NOW administration & development Mandatory Hands-On e...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "15 nov 2022",
  },
  {
    title: "Hiring For Java Developer",
    company: "Mphasis",
    reviews: "4 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/wipro.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description:
      "Experience in large Windchill Implementation and Migration projects Well versed with We..",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "09 nov 2022",
  },
  {
    title: "Senior Software Developer",
    company: "SAP",
    reviews: "4 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/sapind_nov13.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description:
      "Dear Candidate, Greetings!!! from HCL Technologies.We are hiring for Java Developer rol...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "10 oct 2022",
  },
  {
    title: "HCL Hiring Sr Software Develooer(Java)Bangalore",
    company: "Flipkart",
    reviews: "(420 Reviews)",
    image: "https://img.naukimg.com/logo_images/groups/v1/533532.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Chennai",
    description:
      "Employment Type:- Full Time Experience Required:- 3-5 years Experience leading developm...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "04 nov 2022",
  },
  {
    title: "Senior Software Developer",
    company: "Flipkart",
    reviews: "(4 Reviews)",
    image: "https://img.naukimg.com/logo_images/groups/v1/533532.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Bengaluru",
    description:
      "GitHub Actions, Jenkins, GoCD, CircleCI # Experienc e working with Agile methodologies...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "08 nov 2022",
  },
];

const appendData = (data, parent_div) => {
  parent_div.innerHTML = null;
  data.forEach((data) => {
    let div = document.createElement("div");
    div.id = "div";

    let title = document.createElement("h3");
    title.textContent = data.title;
    title.id = "title";

    let company = document.createElement("h4");
    company.textContent = data.company;
    company.id = "company";

    let reviews = document.createElement("p");
    reviews.textContent = data.reviews;
    reviews.id = "reviews";

    let image = document.createElement("img");
    image.src = data.image;
    image.id = "company_img";

    let experience = document.createElement("p");
    experience.textContent = data.experience;
    experience.id = "experience";

    let salary = document.createElement("p");
    salary.textContent = data.salary;
    salary.id = "salary";

    let location = document.createElement("p");
    location.textContent = data.location;
    location.id = "location";

    let description = document.createElement("p");
    description.textContent = data.description;
    description.id = "description";

    let role = document.createElement("p");
    role.textContent = data.role;
    role.id = "role";

    let department = document.createElement("p");
    department.textContent = data.department;
    department.id = "department";

    let date = document.createElement("p");
    date.textContent = data.date;
    date.id = "date";

    let logo = document.createElement("img");
    logo.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPivPx9tx4OlqdV6iT-siLLi9tB1qqrrQbnw&usqp=CAU";
    logo.id = "logo";

    let logo1 = document.createElement("img");
    logo1.src =
      "https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png";
    logo1.id = "logo";

    let pdiv = document.createElement("div");
    pdiv.append(logo, location);
    pdiv.id = "pdiv";

    let pdiv1 = document.createElement("div");
    pdiv1.append(logo1, experience);
    pdiv1.id = "pdiv";

    let logo2 = document.createElement("img");
    logo2.src =
      "https://static.vecteezy.com/system/resources/previews/009/663/927/non_2x/5-star-rating-review-star-transparent-free-png.png";
    logo2.id = "logo2";

    let logo3 = document.createElement("img");
    logo3.src =
      "https://www.clipartmax.com/png/middle/183-1832296_rupee-symbol-png-clipart-indian-rupee-symbol.png";
    logo3.id = "logo";

    let pdiv2 = document.createElement("div");
    pdiv2.append(company, logo2);
    pdiv2.id = "pdiv";

    let pdiv3 = document.createElement("div");
    pdiv3.append(logo3, salary);
    pdiv3.id = "pdiv";

    div.append(
      title,
      pdiv2,
      reviews,
      pdiv1,
      pdiv3,
      pdiv,
      description,
      role,
      department,
      date,
      image
    );
    parent_div.append(div);
  });
};

appendData(data, parent_div);
//-----------------------------------------------------//
const sortbydtbtn = document.getElementById("sort-by-dt-btn");
sortbydtbtn.addEventListener("click", function (el) {
  let sortedData = data.sort(customSort);
  // console.log(sortedData);
  appendData(sortedData, parent_div);
});
const customSort = (a, b) => {
  // console.log(a);
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  }
  return 0;
};
const sortbyrevbtn = document.getElementById("sort-by-rev-btn");
sortbyrevbtn.addEventListener("click", function (el) {
  let sortedData1 = data.sort(customSort1);
  // console.log(sortedData1);
  appendData(sortedData1, parent_div);
});
const customSort1 = (a, b) => {
  // console.log(a);
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  }
  return 0;
  // console.log("ok")
};

const bangalore = document.getElementById("bangalore");
bangalore.addEventListener("click", function () {
  appendData(filteredData, parent_div);
});

let filteredData = data.filter(function (el) {
  return el.location == "Bengaluru";
});

let filteredData1 = data.filter(function (el) {
  return el.location == "Pune";
});

const pune = document.getElementById("pune");
pune.addEventListener("click", function () {
  console.log("Pune");
  appendData(filteredData1, parent_div);
});

let filteredData2 = data.filter(function (el) {
  return el.company == "Accenture";
});

const accentur = document.getElementById("accenture");
accentur.addEventListener("click", function () {
  // console.log("Pune");
  appendData(filteredData2, parent_div);
});

let filteredData3 = data.filter(function (el) {
  return el.company == "Flipkart";
});

const flipkart = document.getElementById("flipkart");
flipkart.addEventListener("click", function () {
  // console.log("Pune");
  appendData(filteredData3, parent_div);
});


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
