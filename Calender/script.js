let outputday = document.getElementById("day");
let outputweek = document.getElementById("week");
let outputmonth = document.getElementById("month");
let outputyear = document.getElementById("year");

let todaydate = new Date();

let dates = todaydate.getDate();
let days = todaydate.getDay(); // week name
let months = todaydate.getMonth(); //month
let years = todaydate.getFullYear();

let weekarr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let montharr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

outputday.innerHTML = dates;
outputweek.innerHTML = weekarr[days];
outputmonth.innerHTML = montharr[months];
outputyear.innerHTML = years;
