const grid = document.getElementById('userInput');

function getRandomInteger(max)
{
    return Math.floor(Math.random() * max + 1);
}

function changeBackgroundColor(e)
{
    let red = getRandomInteger(255);
    let green = getRandomInteger(255);
    let blue = getRandomInteger(255);
    e.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function generateGrid()
{
    let input = prompt("Enter a number of squares per side for the new grid:");

    let container = document.getElementById('container');
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    let cellSize = 960 / input;

    container.style.gridTemplateColumns = 'repeat(' + input + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + input + ', 1fr)';

    for(let i = 0; i < input * input; i++)
    {
        let containerChild = document.createElement('div');
        containerChild.classList.add('cell');
        containerChild.style.height = cellSize + 'px';
        containerChild.addEventListener("mouseover", changeBackgroundColor(containerChild));
        container.appendChild(containerChild);
    }
}

grid.addEventListener("click", generateGrid);