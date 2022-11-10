const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".items");
console.log(selectBtn, items);

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((items) => {
  items.addEventListener("click", () => {
    items.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let btnText = document.querySelector(".btn-text");
    console.log(checked);
    if (checked.innerText == "Pune") {
      console.log("You Win");
    } else {
      console.log("Try Again");
    }
  });
});
const selectBtn2 = document.querySelector("#select-btn2");
const items1 = document.querySelectorAll("#items");
console.log(selectBtn2, items1);

selectBtn2.addEventListener("click", () => {
  selectBtn2.classList.toggle("open");
});

items1.forEach((items1) => {
  items1.addEventListener("click", () => {
    items1.classList.toggle("checked1");

    let checked1 = document.querySelectorAll(".checked1");
    let btnText1 = document.querySelector(".btn-text1");
    console.log(checked);
    if (checked.innerText == "Pune") {
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
    title: "Salesforce Developer",
    company: "Accenture : 4 Reviews",
    reviews: "4 Reviews",
    image: "https://www.naukri.com/hotjobs/images/v3/Accen_nov20.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Bangalore",
    description:
      "Good knowledge & work experience in SFDC configuration, customization, programming with...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "09 nov 2022",
  },
  {
    title: "Full Stack Developer",
    company: "IBM ",
    reviews: "122 Reviews",
    image: "https://img.naukimg.com/logo_images/v2/mobile/16987.gif",
    experience: "2-5 Yrs",
    salary: "4,00,000 -9,00,000",
    location: "Pune",
    description:
      "Good knowledge & work experience in SFDC configuration, customization, programming with...",
    role: "Software Developement",
    department: "Engineering - Software & QA",
    date: "05 nov 2022",
  },
  {
    title: "Hiring For Full Stack PHP Web Developer",
    company: "Infosys",
    reviews: "202 Reviews",
    image: "https://img.naukimg.com/logo_images/v2/mobile/410527.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Bangalore",
    description:
      "Experience in large Windchill Implementation and Migration projects Well versed with We...",
    role: "Software Developement",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    reviews: "4 Reviews",
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
    reviews: "4 Reviews",
    image: "https://img.naukimg.com/logo_images/groups/v1/47784.gif",
    experience: "2-5 Yrs",
    salary: "Not disclosed",
    location: "Pune",
    description:
      "GitHub Actions, Jenkins, GoCD, CircleCI) # Experienc e working with Agile methodologies...",
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

    let image = document.createElement("img");
    image.src = data.image;

    let experience = document.createElement("p");
    experience.textContent = data.experience;

    let salary = document.createElement("p");
    salary.textContent = data.salary;

    let location = document.createElement("p");
    location.textContent = data.location;

    let description = document.createElement("p");
    description.textContent = data.description;

    let role = document.createElement("p");
    role.textContent = data.role;

    let department = document.createElement("p");
    department.textContent = data.department;

    let date = document.createElement("p");
    date.textContent = data.date;

    div.append(
      title,
      company,
      reviews,
      experience,
      salary,
      location,
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
  console.log(sortedData);
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
  console.log(sortedData1);
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
};
