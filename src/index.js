/**
 * Sets up event listeners for the task creation form --- (waits til the DOM is fully loaded.)
 * This function => initializes ability to create a new task (core idea of the project)
 * Allows for new data to be logged to user interface.
 * @listens DOMContentLoaded
 * @listens submit
 *
 * @param {Event} e - The DOMContentLoaded event object.
 * @returns {void} 

*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  /**
   * Prevents the default form submission, creates a new task item,
   * and adds it to the task list.
   *
   * @param {Event} e - The form submission event object.
   * @returns {void}

   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // variable created to store user input.
    const taskDescription = document.querySelector(
      "#new-task-description"
    ).value;

    const taskList = document.querySelector("#tasks");
    // creates new element 'list item'("li") w/i HTML... provides proper
    // formatting to log/display user input.
    // ***CRUD equivalent -> 'Create'***
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    // appends the new event, and adds it to the task list
    // ***CRUD equivalent -> 'Update'***
    taskList.appendChild(newTask);

    form.reset();
  });
});
