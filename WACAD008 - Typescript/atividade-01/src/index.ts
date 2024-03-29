type reminder = [string, string, string, string?, string?];

type user = [string, string, reminder[]];

const reminders: reminder[] = [];

const add = document.getElementById("addButton");

add?.addEventListener("click", () => {
  const form = document.getElementById("form");
  if (form?.classList.contains("hide")) {
    form.classList.remove("hide");
  } else {
    form?.classList.add("hide");
  }
});

const save = document.getElementById("btnSalvar");

save?.addEventListener("click", () => {
  const now = new Date();

  const color = <HTMLInputElement>(
    document.querySelector('input[name="in-color"]:checked')
  );
  const title = <HTMLInputElement>document.getElementById("in-title");
  const deadline = <HTMLInputElement>document.getElementById("in-deadline");

  const description = <HTMLInputElement>(
    document.getElementById("in-description")
  );

  let newReminder: reminder = [
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

const createItem = (
  item: [string, string, string, string?, string?],
  list: HTMLElement | null
) => {
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

  list?.appendChild(card);
};
