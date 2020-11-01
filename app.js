const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Generate todo

const generateTemplate = (todo) => {
  const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
      >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete text-danger"></i>
    </li>
    `;

  list.innerHTML += html;
};

// Submit todo

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// Delete todo

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Search Todo

const filteredTodos = (userInput) => {
  Array.from(list.children)
    .filter((eachLi) => !eachLi.textContent.toLowerCase().includes(userInput))
    .forEach((eachLi) => eachLi.classList.add('filtered'));

  Array.from(list.children)
    .filter((eachLi) => eachLi.textContent.toLowerCase().includes(userInput))
    .forEach((eachLi) => eachLi.classList.remove('filtered'));
};

search.addEventListener("keyup", () => {
  const userInput = search.value.trim().toLowerCase();
  filteredTodos(userInput);
});
