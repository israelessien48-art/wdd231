const courses = [
  { code: "CSE 110", credits: 2, completed: true },
  { code: "WDD 130", credits: 2, completed: true },
  { code: "WDD 131", credits: 2, completed: false },
  { code: "WDD 231", credits: 2, completed: false }
];

const list = document.getElementById("course-list");
const credits = document.getElementById("credits");
const buttons = document.querySelectorAll(".filters button");

// Make credits accessible for screen readers
credits.setAttribute("aria-live", "polite");

function render(filter) {
  list.innerHTML = "";

  const filtered =
    filter === "all"
      ? courses
      : courses.filter(c => c.code.toLowerCase().startsWith(filter));

  const ul = document.createElement("ul"); // semantic list
  filtered.forEach(course => {
    const li = document.createElement("li");
    li.className = "course";
    if (course.completed) li.classList.add("completed");
    li.textContent = course.code + (course.completed ? " ✅" : "");
    ul.appendChild(li);
  });

  list.appendChild(ul);

  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  credits.textContent =
    `The total credits for courses listed above is ${total}`;
}

// Add button click listeners
buttons.forEach(btn =>
  btn.addEventListener("click", () =>
    render(btn.dataset.filter)
  )
);

render("all");
