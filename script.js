// Add task to the list
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Filter product list
function filterProducts() {
  const query = document.getElementById("productFilter").value.toLowerCase();
  const products = document.querySelectorAll("#productList li");

  products.forEach(item => {
    const match = item.textContent.toLowerCase().includes(query);
    item.style.display = match ? "block" : "none";
  });
}
