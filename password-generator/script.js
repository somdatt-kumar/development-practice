let displaypassword = document.getElementById('password');

let length = 16;
let uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase ="abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()-_=+[]{}\|/<>?~";
let allchar = "uppercase +lowercase + number +symbol";

function generatepassword() {
    let password ="";
    password += uppercase[Math.floor(Math.random() * uppercase.length )];
    password += lowercase[Math.floor(Math.random() * lowercase.length )];
    password += number[Math.floor(Math.random() * number.length )];
    password += symbol[Math.floor(Math.random() * symbol.length )];

    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length )];
    }
    displaypassword.value  = password;
}

function copypassword() {
    displaypassword.select();
    document.execCommand("copy");
}