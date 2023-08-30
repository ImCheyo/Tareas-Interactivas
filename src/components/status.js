export function handleStatusButton(button){
    const newStatus = button.getAttribute('data-status');
    const checkboxes = document.querySelectorAll('.task-checkbox:checked');
    checkboxes.forEach((checkbox) => {
      const row = checkbox.closest('tr');
      const statusCell = row.querySelector('.status-cell');
      statusCell.textContent = newStatus;
      checkbox.checked = false;
    });
}

