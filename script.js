let input = document.getElementById("input");
let ulist = document.getElementById("ulist");
let button = document.getElementById("butt");

button.addEventListener("click", taskOn);

function taskOn() {
    const contain = input.value;

    let list = document.createElement("li");
    list.innerText = contain;

    ulist.appendChild(list);

    list.addEventListener("click", () => {
        list.classList.toggle("done");

    });

    list.addEventListener("dblclick", () => {
        ulist.removeChild(list);
    })



}