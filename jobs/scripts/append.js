const appendData = (data, parent_div) => {
  parent_div.innerHTML = null;
  data.forEach((data) => {
    let div = document.createElement("div");
    div.id = "div";

    let title = document.createElement("h3");
    title.textContent = data.title;

    let company = document.createElement("h4");
    company.textContent = data.company;

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

export { appendData };
