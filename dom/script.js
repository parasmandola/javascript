const text = document.getElementById("text");
const box = document.getElementById("box");
const list = document.getElementById("list");
const input = document.getElementById("inputBox");


const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const addItemBtn = document.getElementById("addItemBtn");


changeTextBtn.addEventListener("click", function () {
    if (input.value === "") {
        text.innerHTML = "Please type something first";
    } else {
        text.innerHTML = input.value;
    }
});


changeColorBtn.addEventListener("click", function () {
    box.style.backgroundColor = "pink";
});


addItemBtn.addEventListener("click", function () {
    let newItem = document.createElement("li");

    if (input.value === "") {
        newItem.innerHTML = "New Item";
    } else {
        newItem.innerHTML = input.value;
    }

    list.appendChild(newItem);
});
