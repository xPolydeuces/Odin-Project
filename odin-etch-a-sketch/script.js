const gridContainer = document.querySelector('#grid-container');
const gridSize = 16;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for(let i = 0; gridSize*gridSize > i; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.style.height = 32/gridSize+'rem';
    gridElement.style.width = 32/gridSize+'rem';
    gridElement.addEventListener('mouseover', fillGridElement);
    gridElement.addEventListener('mousedown', fillGridElement);
    gridContainer.appendChild(gridElement);
}

function fillGridElement (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.classList.add('filled');
}