function Grid(size) { 
    const container = document.getElementById('container');
    let numSquares = Math.pow(size, 2);
    for (let i = 0; i < numSquares; i++) { 
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
        container.style.setProperty('--num-per-row', size)
}

Grid(25);