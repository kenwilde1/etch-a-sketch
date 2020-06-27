// get the container that will hold the grid
const container = document.querySelector("#container");

function setGrid(dimension) {
  for (i=0;i < dimension;i++) {
    for (j=0;j < dimension;j++) {

    // calculate size of each square to fit the fixed grid size of 600x600
    let boxSize = (600 / dimension) / 2;

    // create and append each square into the container
    const square = document.createElement('div');
    square.style.cssText = `display:inline-block;padding: ${boxSize}px; margin:0;`;
    square.classList.add('square');
    container.appendChild(square);
    console.log("Grid is set");
    }
  }

  // for every square in the grid, add a mouseover event that will apply the css class 'highlight'
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', (e) => {
    square.classList.add('highlight');

  }));
}

// set initial grid size for when you first load the page
setGrid(16);

// reset the grid function, runs resetGrid()
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(e) {
  resetGrid();
});


function resetGrid() {

  // get all squares and remove them from the container
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => container.removeChild(square));

  // get new dimensions for the grid
  let getUserDimensions = parseInt(prompt("Enter grid size for new area, choose between 1-100:"));
  while (getUserDimensions > 100 || getUserDimensions < 0) {
    getUserDimensions = parseInt(prompt("Enter grid size for new area, choose between 1-100:"));
  }

  // set the grid with the new user dimensions
  setGrid(getUserDimensions);

}
