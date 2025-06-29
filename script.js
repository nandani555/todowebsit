document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formtodo');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  // Add item
  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${text}</span>
      <button class="mark-btn">Done</button>
      <button class="delete-btn">Delete</button>
    `;
    list.appendChild(li);
    input.value = '';
  });

  // Handle delete/mark via delegation
  list.addEventListener('click', e => {
    const item = e.target.closest('.todo-item');
    if (!item) return;

    if (e.target.classList.contains('delete-btn')) {
      item.remove();
    } else if (e.target.classList.contains('mark-btn')) {
      item.classList.toggle('completed');
    }
  });
});
