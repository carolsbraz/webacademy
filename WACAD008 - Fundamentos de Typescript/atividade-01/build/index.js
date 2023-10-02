"use strict";
const reminders = [];
const add = document.getElementById("addButton");
add === null || add === void 0 ? void 0 : add.addEventListener("click", () => {
    const form = document.getElementById("form");
    if (form === null || form === void 0 ? void 0 : form.classList.contains("hide")) {
        form.classList.remove("hide");
    }
    else {
        form === null || form === void 0 ? void 0 : form.classList.add("hide");
    }
});
const save = document.getElementById("btnSalvar");
save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
    const now = new Date();
    const color = (document.querySelector('input[name="in-color"]:checked'));
    const title = document.getElementById("in-title");
    const deadline = document.getElementById("in-deadline");
    const description = (document.getElementById("in-description"));
    let newReminder = [
        color.value,
        title.value,
        now.toLocaleString(),
        deadline.value,
        description.value,
    ];
    reminders.push(newReminder);
    title.value = "";
    deadline.value = "";
    description.value = "";
    loadList();
});
function loadList() {
    const cards = document.getElementById("cards");
    if (cards != undefined) {
        cards.innerHTML = "";
    }
    reminders.forEach((item) => {
        console.log(item);
        createItem(item, cards);
    });
}
const createItem = (item, list) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(item[0]);
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerText = item[1];
    card.appendChild(title);
    const labelDate = document.createElement("p");
    labelDate.classList.add("enfase");
    labelDate.innerText = "Criado em: ";
    card.appendChild(labelDate);
    const date = document.createElement("p");
    date.classList.add("date");
    date.innerText = item[2];
    card.appendChild(date);
    if (item[3]) {
        const labelDeadline = document.createElement("p");
        labelDeadline.classList.add("enfase");
        labelDeadline.innerText = "Deadline: ";
        card.appendChild(labelDeadline);
        const deadline = document.createElement("p");
        deadline.classList.add("deadline");
        deadline.innerText = item[3];
        card.appendChild(deadline);
    }
    if (item[4]) {
        const labelDescription = document.createElement("p");
        labelDescription.classList.add("enfase");
        labelDescription.innerText = "Descrição: ";
        card.appendChild(labelDescription);
        const description = document.createElement("p");
        description.classList.add("description");
        description.innerText = item[4];
        card.appendChild(description);
    }
    list === null || list === void 0 ? void 0 : list.appendChild(card);
};
