const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const value = document.querySelector('.value');
const draw = document.querySelector('.draw');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
draw.addEventListener('click', function(){drawingMode=true})
eraser.addEventListener('click', function(){drawingMode=false});
clear.addEventListener('click', gridCreate);
let mouseDown = false;
let drawingMode = true;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function gridCreate() {
    const gridSize = slider.value;
    value.innerHTML = gridSize;
    gridContainer.innerHTML = '';
    for(let i = 0; gridSize*gridSize > i; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.style.height = `${32/gridSize}rem`;
        gridElement.style.width = `${32/gridSize}rem`;
        gridElement.addEventListener('mouseover', fillGridElement);
        gridElement.addEventListener('mousedown', fillGridElement);
        gridContainer.appendChild(gridElement);
    }
}

function fillGridElement(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (drawingMode){
        e.target.classList.add('filled');
    } else {
        e.target.classList.remove('filled');
    }
    
}

slider.oninput = function() {
    gridCreate();
}

gridCreate();