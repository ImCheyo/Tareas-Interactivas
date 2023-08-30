export function handleDeleteButton() {
    const checkboxes = document.querySelectorAll('.task-checkbox:checked');
  checkboxes.forEach((checkbox) => {
    const row = checkbox.closest('tr');
    row.remove();
  });
}