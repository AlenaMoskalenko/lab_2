// Поточний лічильник ID для нових записів
let nextId = 2;

const form = document.getElementById('addForm');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', function (event) {
  // Запобігаємо перезавантаженню сторінки при відправці форми
  event.preventDefault();

  // Отримуємо значення з полів вводу
  const nameValue = document.getElementById('nameInput').value.trim();
  const categoryValue = document.getElementById('categoryInput').value.trim();
  const priceValue = document.getElementById('priceInput').value.trim();

  if (!nameValue || !categoryValue || !priceValue) {
    return;
  }

  // Створюємо новий елемент рядка таблиці
  const row = document.createElement('tr');

  // Формуємо клітинки рядка
  row.innerHTML = `
    <td>${nextId++}</td>
    <td>${nameValue}</td>
    <td>${categoryValue}</td>
    <td>${priceValue}</td>
  `;

  // Додаємо рядок до таблиці
  tableBody.appendChild(row);

  // Очищаємо поля форми після додавання
  form.reset();
});