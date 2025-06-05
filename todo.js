document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('todo-add');
    const list = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        const li = document.createElement('li');
        li.textContent = text;
        const del = document.createElement('button');
        del.textContent = 'Remove';
        del.addEventListener('click', () => li.remove());
        li.appendChild(del);
        list.appendChild(li);
        input.value = '';
    });
});
