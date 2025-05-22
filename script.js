document.addEventListener('DOMContentLoaded', () => {
    const countEl = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    let count = 0;
    incrementButton.addEventListener('click', () => {
        count++;
        countEl.textContent = count;
    });
});
