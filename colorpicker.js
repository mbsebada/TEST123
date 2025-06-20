document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('color-input');
    const applyBtn = document.getElementById('apply-color');

    applyBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = input.value;
    });
});
