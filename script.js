let counterValue = 0;
const counterElement = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCounter() {
    counterElement.textContent = counterValue;
    // Add animation
    counterElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        counterElement.style.transform = "scale(1)";
    }, 100);
}

incrementBtn.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});

// Initialize counter
updateCounter();