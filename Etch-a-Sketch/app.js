const button = document.querySelector('button');
let size = 10;

button.addEventListener('click', function() { 
    const input = prompt('Enter grid size (Max: 100');
    const gridSize = parseInt(input);

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        size = gridSize; // Update the global size variable
        Grid(size); // Call Grid with the updated size
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

function Grid(size) { 
    const container = document.getElementById('container');
    container.innerHTML = '';

    let numSquares = Math.pow(size, 2);
    for (let i = 0; i < numSquares; i++) { 
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
        container.style.setProperty('--num-per-row', size);

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function () {
            this.classList.add('hover-effect');
        });
    });
}

Grid(size);

const sketch = document.getElementsByClassName('square');
sketch.addEventListener("mouseover", function() {
    this.classList.add("hover-effect");
  });

