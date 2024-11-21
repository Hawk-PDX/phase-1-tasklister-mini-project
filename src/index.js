document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskDescription = document.querySelector(
      "#new-task-description"
    ).value;

    const taskList = document.querySelector("#tasks");

    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    taskList.appendChild(newTask);

    form.reset();
  });
});
