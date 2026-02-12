// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increraseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

increraseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}