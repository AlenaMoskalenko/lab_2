const items = [
  { id: 1, name: "Ноутбук", category: "Електроніка", price: 25000 }
];

let nextId = 2;

const form = document.getElementById("addForm");
const tableBody = document.getElementById("tableBody");

function renderTable() {
  tableBody.innerHTML = "";

  for (let item of items) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td> ${item.id} </td>
      <td> ${item.name} </td>
      <td> ${item.category} </td>
      <td> ${item.price} </td>
    `;
    tableBody.appendChild(row);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newItem = {
    id: nextId++,
    name: document.getElementById("nameInput").value,
    category: document.getElementById("categoryInput").value,
    price: document.getElementById("priceInput").value
  };
  items.push(newItem);

   renderTable();

    form.reset();
});


renderTable();
