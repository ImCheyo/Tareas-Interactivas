document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const taskTable = document.getElementById('taskTable');
  const deleteButton = document.getElementById('deleteButton');
  const statusButtons = document.querySelectorAll('.status-button');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = document.querySelector('#tName').value;
    const taskDescription = document.querySelector('#tDescription').value;

    const newRow = taskTable.insertRow();
    const checkBoxCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const nameCell = newRow.insertCell(2);
    const descriptionCell = newRow.insertCell(3);
    const statusCell = newRow.insertCell(4);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'task-checkbox';
    checkBoxCell.appendChild(checkBox);

    idCell.textContent = generateUniqueId();
    nameCell.textContent = taskName;
    descriptionCell.textContent = taskDescription;
    statusCell.className = 'status-cell';
    statusCell.textContent = 'Pending';
  });

deleteButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.task-checkbox:checked');
  checkboxes.forEach((checkbox) => {
    const row = checkbox.closest('tr');
    row.remove();
  });
});

statusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const newStatus = button.getAttribute('data-status');
    const checkboxes = document.querySelectorAll('.task-checkbox:checked');
    checkboxes.forEach((checkbox) => {
      const row = checkbox.closest('tr');
      const statusCell = row.querySelector('.status-cell');
      statusCell.textContent = newStatus;
    });
  });
});

  function generateUniqueId() {
    return Date.now().toString();
  }
});