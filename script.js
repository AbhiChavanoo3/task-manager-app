function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText + 
    " <button onclick='removeTask(this)'>Delete</button>";

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
