const courses = [
  { code: "CSE 110", credits: 2, completed: true },
  { code: "WDD 130", credits: 2, completed: true },
  { code: "WDD 131", credits: 2, completed: false },
  { code: "WDD 231", credits: 2, completed: false }
];

const list = document.getElementById("course-list");
const credits = document.getElementById("credits");
const buttons = document.querySelectorAll(".filters button");

function render(filter) {
  list.innerHTML = "";

  const filtered =
    filter === "all"
      ? courses
      : courses.filter(c => c.code.toLowerCase().startsWith(filter));

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    if (course.completed) div.classList.add("completed");
    div.textContent = course.code;
    list.appendChild(div);
  });

  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  credits.textContent =
    `The total credits for course listed above is ${total}`;
}

buttons.forEach(btn =>
  btn.addEventListener("click", () =>
    render(btn.dataset.filter)
  )
);

render("all");
