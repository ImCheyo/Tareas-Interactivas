export function handleFormSubmit(event){
    event.preventDefault();

    const taskTable = document.getElementById('taskTable');
    const taskName = document.querySelector('#tName').value;
    const taskDescription = document.querySelector('#tDescription').value;
    const taskNameInput = document.querySelector('#tName');
    const taskDescriptionInput = document.querySelector('#tDescription');

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

    taskNameInput.value = '';
    taskDescriptionInput.value = '';
}

function generateUniqueId() {
    return Date.now().toString();
  }

