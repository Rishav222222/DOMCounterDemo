document.addEventListener('DOMContentLoaded', function () {
    const countDisplay = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const errorDisplay = document.getElementById('error');

    let count = 0;

    incrementButton.addEventListener('click', function () {
        count++;
        updateUI();
    });

    decrementButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            errorDisplay.style.display = 'none'; // Hide error message
        } else {
            errorDisplay.style.display = 'block'; // Show error message
        }
        updateUI();
    });

    clearButton.addEventListener('click', function () {
        count = 0;
        updateUI();
    });

    function updateUI() {
        countDisplay.innerHTML = count;
        if (count > 1) {
            clearButton.style.display = 'block'; // Show clear button
            decrementButton.disabled = false; // Enable decrement button
        } else {
            clearButton.style.display = 'none'; // Hide clear button
            decrementButton.disabled = count === 0; // Disable decrement if count is 0
            errorDisplay.style.display = count === 0 ? 'block' : 'none'; // Show/hide error based on count
        }
    }
});