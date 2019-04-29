console.log("Hack your future, right?!");

const header = document.querySelector("h1");
console.log("header: ", header);

// EXERCISE:
const selectIdChangeImageOfButton = document.querySelector("#btn-changeImage"); // select "change image" button (querySelector)
console.log(selectIdChangeImageOfButton);
const changeImage = () => {
  const selectImage = document.querySelector("img");
  const selectIdImageInput = document.getElementById("imageInput");
  console.log("selectIdImageInput.value");
  if (selectIdImageInput.value !== "") {
    selectImage.src = selectIdImageInput.value;
  }
  selectIdImageInput.value = "";    
};
selectIdChangeImageOfButton.addEventListener("click", changeImage); // add click event listener

// execute changeImage() function on click event
// define changeImage() function
// in this function:
//    get image element
//    get imageInput element
//    log input value
//    set image src to imageInput element value

// ====================================== //

// BONUS:
const addTodoButtonRef = document.querySelector("#btn-addTodo");
console.log("addTodoButtonRef");
const addTodo = () => {
  const getTodoListUlRef = document.getElementById("todoList");
  const getTodoInputRef = document.getElementById("todoInput");
  console.log("getTodoInputRef.value");
  const createListElement = document.createElement("li");
  if (getTodoInputRef.value !== "") {
    createListElement.innerHTML = getTodoInputRef.value;
    getTodoListUlRef.appendChild(createListElement);
  }

  getTodoInputRef.value = "";
};

addTodoButtonRef.addEventListener("click", addTodo);
// select "add todo" button (querySelector)
// add click event listener
// execute addTodo() function on click event
// define addTodo() function
// in this function:
//    get todoList element
//    get todoInput element
//    log todoInput element value
//    create <li> element
//    set <li> element innerHtml to todoInput value
//    add <li> element to todoList
