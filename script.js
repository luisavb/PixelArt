const palette = document.getElementById('color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function generateColors(number) {
  palette.innerHTML = '';
  for (let index = 1; index <= number; index+= 1) {
    const newColor = document.createElement('div')
    newColor.className = index;
    newColor.className += ' color';
    palette.appendChild(newColor);
     // Source: https://css-tricks.com/snippets/javascript/random-hex-color/
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    newColor.style.backgroundColor = `#${randomColor}`;
  }
  const colorBlack = document.getElementsByClassName('1');
  colorBlack[0].style.backgroundColor = 'black';
  colorBlack[0].className += ' selected';
}

function pixelCreator(size) {
  pixelBoard.innerHTML = ''; 
  for (let index = 0; index < size; index += 1) { // fazendo 5 linhas
    const linha = document.createElement('div'); // criando 1 linha a cada repeticao do for
    linha.className = 'line'; // definindo essa classe para tentar amenizar o erro de pintar as bordas
    pixelBoard.appendChild(linha); // add a linha ao pixelBoard que já existe no HTML
    for (let i = 0; i < size; i += 1) { // cada linha terá 5 pixeis, assim, é necessário outro laço
      const pixel = document.createElement('div'); // criando o pixel(uma caixinha)
      pixel.className = 'pixel'; // add classe ao pixel
      linha.appendChild(pixel); // definindo pixel como filho da linha criada dentro dessa repeticao
      pixel.addEventListener('click', (event) => {
        const selectedColor = document.querySelector('.selected');
        const cor = selectedColor.style.backgroundColor;
        const ponto = event.target;
        ponto.style.backgroundColor = cor;
      });
    }
  }
}

function morePixelCreator(size) {
  pixelBoard.innerHTML = ''; 
  for (let index = 0; index < size; index += 1) { // fazendo 5 linhas
    const linha = document.createElement('div'); // criando 1 linha a cada repeticao do for
    linha.className = 'line'; // definindo essa classe para tentar amenizar o erro de pintar as bordas
    pixelBoard.appendChild(linha); // add a linha ao pixelBoard que já existe no HTML
    for (let i = 0; i < size; i += 1) { // cada linha terá 5 pixeis, assim, é necessário outro laço
      const pixel = document.createElement('div'); // criando o pixel(uma caixinha)
      pixel.className = 'morePixel'; // add classe ao pixel
      linha.appendChild(pixel); // definindo pixel como filho da linha criada dentro dessa repeticao
      pixel.addEventListener('click', (event) => {
        const selectedColor = document.querySelector('.selected');
        const cor = selectedColor.style.backgroundColor;
        const ponto = event.target;
        ponto.style.backgroundColor = cor;
      });
    }
  }
}

window.onload = () => {
  pixelCreator(4);
  generateColors(4);

};

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    const exSelected = document.querySelector('.selected'); // isso dá certo aqui e não no To Do List por que o site é carregado com o black já selected
    exSelected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
selectColor();

function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixeis = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixeis.length; index += 1) {
      pixeis[index].style.backgroundColor = 'white';
    }
    generateColors(4);
  });
}
clearBoard();

const inputBoardSize = document.querySelector('#board-size');
const buttonUserGenerateBoard = document.querySelector('#generate-board');

buttonUserGenerateBoard.addEventListener('click', () => {
  const boardSizeNumber = inputBoardSize.value;
  if (boardSizeNumber === null
    || boardSizeNumber === 0
    || boardSizeNumber === '') {
    alert('Board inválido!'); 
  } else if (boardSizeNumber > 50) {
    pixelCreator(50);
  } else if (boardSizeNumber < 5) {
    pixelCreator(5);
  } else {
    pixelCreator(boardSizeNumber);
  }
});

const inputPaletteSize = document.querySelector('#palette-size');
const buttonUserGeneratePalette = document.querySelector('#generate-palette');

buttonUserGeneratePalette.addEventListener('click', () => {
  const paletteSizeNumber = inputPaletteSize.value;
  if (paletteSizeNumber === null
    || paletteSizeNumber === 0
    || paletteSizeNumber === '') {
    alert('Board inválido!');
  } else if (paletteSizeNumber > 15) {
    alert('Calma, cores demais!');
    generateColors(15);
  } else if (paletteSizeNumber < 4) {
    alert('Mais cores! Mais cores!');
    generateColors(4);
  } else {
    generateColors(paletteSizeNumber);
  }
});
