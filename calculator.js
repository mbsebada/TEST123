document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementById('calc-buttons');
    let current = '';

    buttons.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName !== 'BUTTON') return;

        if (target.classList.contains('digit')) {
            current += target.textContent;
        } else if (target.classList.contains('op')) {
            current += ` ${target.textContent} `;
        } else if (target.id === 'calc-clear') {
            current = '';
        } else if (target.id === 'calc-equals') {
            try {
                current = eval(current).toString();
            } catch {
                current = 'Error';
            }
        }
        display.value = current;
    });
});
