// Get the input and list elements 
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const toggleBtn = document.getElementById("toggle-btn");




function addTodoItem() {
  if (input.value === "") {
    alert("Please enter a todo item");
    return;
  }
  // create list items element dynamically 

  const newItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const text = document.createElement("span");
  text.textContent = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
    updateTotalTasks();
  });
//put it inside list item element;

  newItem.appendChild(checkbox);
  newItem.appendChild(text);
  newItem.appendChild(deleteBtn);

  // put list itme in list(ul)
  list.appendChild(newItem);

  input.value = "";
  updateTotalTasks();
}

// Update total tasks count
function updateTotalTasks() {
  const totalTasks = list.childElementCount;
  document.getElementById("total-tasks").textContent = `Total Tasks: ${totalTasks}`;
}


// Add button event listener
document.getElementById("add-btn").addEventListener("click",addTodoItem);

  // add items by pressing enter

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodoItem();
  }
});




// Checkbox event listener

list.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    const listItem = event.target.parentNode;
    if (event.target.checked) {
      listItem.classList.add("checked"); // add class name to checked items
    } else {
      listItem.classList.remove("checked");
    }
  }
  updateTotalTasks();
});



// complete all button
toggleBtn.addEventListener("click", () => {
  const checkboxes = list.querySelectorAll("input[type='checkbox']");
  const checked = list.querySelectorAll("input[type='checkbox']:checked");
  const allChecked = checkboxes.length === checked.length;

  checkboxes.forEach((checkbox) => {
    checkbox.checked = !allChecked;
    const listItem = checkbox.parentNode;
    if (checkbox.checked) {
      listItem.classList.add("checked");
    } else {
      listItem.classList.remove("checked");
    }
  });

  updateTotalTasks();
});
