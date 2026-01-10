const courses = [
  { code: "CSE 110", name: "Intro to Programming", credits: 2, completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 230", name: "Web Frontend Dev I", credits: 2, completed: false },
  { code: "WDD 231", name: "Web Frontend Dev II", credits: 2, completed: false }
];

const courseList = document.getElementById("course-list");
const creditsDisplay = document.getElementById("credits");
const buttons = document.querySelectorAll(".filters button");

function displayCourses(filter) {
  courseList.innerHTML = "";

  const filtered = filter === "all"
    ? courses
    : courses.filter(c => c.code.toLowerCase().startsWith(filter));

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    if (course.completed) div.classList.add("completed");
    div.textContent = `${course.code} - ${course.name}`;
    courseList.appendChild(div);
  });

  const totalCredits = filtered.reduce((sum, c) => sum + c.credits, 0);
  creditsDisplay.textContent = `Total Credits: ${totalCredits}`;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    displayCourses(button.dataset.filter);
  });
});

displayCourses("all");
