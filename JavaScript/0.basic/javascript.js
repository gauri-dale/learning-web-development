// to print output
console.log(`Hello`);

// for a window alert
window.alert(`This is an alert!`);

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza!`;

// How to accept user input

// 1. Window prompt

/*let username;

username = window.prompt(`What is your username?`);

console.log(username); */

// 2. HTML textbox

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH11").textContent = `Hello ${username}`;
}