const btn1 = document.querySelector("#btn1");
const task = document.querySelector("#task");
const addtask = document.querySelector(".added-item");
const create = document.querySelector(".create");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

let addsometask = document.querySelector(".addlist");

let addtodo = () => {
  let inputtext = task.value.trim();
  if (inputtext.length <= 0) {
    alert("you can write somethings...");
  }
  let comptask = document.createElement("div");
  let taskval = document.createElement("p");

  let btndiv = document.createElement("div");

  addtask.appendChild(comptask);
  comptask.appendChild(taskval);
  comptask.appendChild(btndiv);

  taskval.innerHTML = inputtext;

  comptask.classList.add("taskvalue");
  taskval.style.maxWidth = "15.5rem";
  taskval.style.lineBreak = "anywhere";

  btndiv.classList.add("div-btn");
  btndiv.appendChild(btn2);
  btndiv.appendChild(btn3);
  btn2.classList.add("btn2");
  btn3.classList.add("btn3");

};

// let edit = () => {};

// let remove = () => {};

btn1.addEventListener("click", addtodo);
// btn2.addEventListener("click", edit);
// btn3.addEventListener("click", remove);
