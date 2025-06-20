document.addEventListener('DOMContentLoaded', () => {
    const timeEl = document.getElementById('time');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');

    let interval = null;
    let startTime = 0;
    let elapsed = 0;

    function update() {
        elapsed = Date.now() - startTime;
        timeEl.textContent = (elapsed / 1000).toFixed(1);
    }

    startBtn.addEventListener('click', () => {
        if (interval) return;
        startTime = Date.now() - elapsed;
        interval = setInterval(update, 100);
    });

    stopBtn.addEventListener('click', () => {
        if (!interval) return;
        clearInterval(interval);
        interval = null;
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
        elapsed = 0;
        timeEl.textContent = '0.0';
    });
});
