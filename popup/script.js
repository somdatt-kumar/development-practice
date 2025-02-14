let pop = document.getElementById("popok");

let popdown = () => {
  pop.classList.add("open-popup");
};
let popup = () => {
  pop.classList.remove("open-popup");
};

document.getElementById("submit").addEventListener("click", popdown);

document.getElementById("btn").addEventListener("click", popup);
