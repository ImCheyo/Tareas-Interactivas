import { handleFormSubmit } from "./components/form";
import { handleDeleteButton } from "./components/delete";
import { handleStatusButton } from "./components/status";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const deleteButton = document.getElementById('deleteButton');
  const statusButtons = document.querySelectorAll('.status-button');

  form.addEventListener('submit', handleFormSubmit);

  deleteButton.addEventListener('click', handleDeleteButton);

  statusButtons.forEach((button) => {
    button.addEventListener('click', () => handleStatusButton(button));
  });
});