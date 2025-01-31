let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let currenttime = new Date();

  hrs.innerHTML = currenttime.getHours();
  mins.innerHTML = currenttime.getMinutes();
  sec.innerHTML = currenttime.getSeconds();
},1000);
