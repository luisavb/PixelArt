// requisitos 2 e 3

const colors = document.getElementsByClassName('color');
const colorBlack = colors[0];
const color1 = colors[1];
const color2 = colors[2];
const color3 = colors[3];
colorBlack.style.backgroundColor = 'black';

// requisito 4
// #CREDITOS# > consegui fazer o requisito 4 e 5 graças a mentoria
// Empaquei nessa questão por que criava duas boards quando o usuario definia a dele, lembrei a Isadora já tinha tirado essa dúvida em mentoria anterior,
// fui olhar o reposiório dela e VALEU MATHEUS(mentor), VALEU ISADORA SARAIVA QUE TIROU ESSA DÚVIDA!!!!!!
// link do repositório da Isadora: https://github.com/tryber/sd-020-b-project-pixels-art/pull/6
const pixelBoard = document.querySelector('#pixel-board');

function pixelCreator(size) {
  // CARAMBAAAAAAAAAAA
  pixelBoard.innerHTML = ''; // Para que na criação de uma board com valores definidos pelo usuario ocorra, o pixelBoard tem que zerar antes de criar denovo!

  for (let index = 0; index < size; index += 1) { // fazendo 5 linhas
    const linha = document.createElement('div'); // criando 1 linha a cada repeticao do for
    linha.className = 'line'; // definindo essa classe para tentar amenizar o erro de pintar as bordas
    pixelBoard.appendChild(linha); // add a linha ao pixelBoard que já existe no HTML
    for (let i = 0; i < size; i += 1) { // cada linha terá 5 pixeis, assim, é necessário outro laço
      const pixel = document.createElement('div'); // criando o pixel(uma caixinha)
      pixel.className = 'pixel'; // add classe ao pixel
      linha.appendChild(pixel); // definindo pixel como filho da linha criada dentro dessa repeticao
    }
  }
}

pixelCreator(5);

// requisito 6

window.onload = () => {
  colorBlack.className += ' selected';
  // Para gerar o aletorizador eu sabia que necessitava o math.random, não sabia como, por isso utilizei como fonte o site abaixo!
  // Source: https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  color1.style.backgroundColor = `#${randomColor1}`;
  color2.style.backgroundColor = `#${randomColor2}`;
  color3.style.backgroundColor = `#${randomColor3}`;
};

// requisito 7
// #CREDITOS# > descompliquei os requisitos 7 e 8 durante a mentoria

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    const exSelected = document.querySelector('.selected'); // isso dá certo aqui e não no To Do List por que o site é carregado com o black já selected
    exSelected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
selectColor();

// requisito 8

// function paintPixel() {
//   const pixel = document.querySelectorAll('.pixel');
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].addEventListener('click', (event) => {
//       const selectedColor = document.querySelector('.selected');
//       const cor = selectedColor.id;
//       const ponto = event.target;
//       ponto.id = cor;
//     });
//   }
// }
// paintPixel();

function paintPixel() {
  const pixel = document.querySelectorAll('#pixel-board'); // o bug tá aqui
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      const cor = selectedColor.style.backgroundColor;
      const ponto = event.target;
      ponto.style.backgroundColor = cor;
    });
  }
}
paintPixel();

// function paintPixel() {
//   const pixel = document.querySelectorAll('#pixel-board');
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].addEventListener('click', (event) => {
//       const selectedColor = document.querySelector('.selected');
//       const cor = selectedColor.id;
//       const ponto = event.target;
//       ponto.id = cor;
//     });
//   }
// }
// paintPixel();

// requisito 9

function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixeis = document.getElementsByClassName('pixel');
    const line = document.getElementsByClassName('line');
    for (let index = 0; index < pixeis.length; index += 1) {
      pixeis[index].style.backgroundColor = 'white';
    }
    for (let index = 0; index < line.length; index += 1) {
      line[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

// function clearBoard() {
//   const button = document.querySelector('#clear-board');
//   button.addEventListener('click', () => {
//     const pixeis = document.querySelectorAll('#pixel-board');
//     for (let index = 0; index < pixeis.length; index += 1) {
//       pixeis[index].style.backgroundColor = 'white';
//     }
//   });
// }
// clearBoard();

// function clearBoard() {
//   const button = document.querySelector('#clear-board');
//   button.addEventListener('click', () => {
//     const pixeis = document.getElementsByClassName('pixel');
//     for (let index = 0; index < pixeis.length; index += 1) {
//       pixeis[index].style.backgroundColor = 'white';
//     }
//   });
// }
// clearBoard();

// requisito 10
// #CREDITOS# - Dúvidas retiradas na mentória por João PSTER e consultando o repositorio de Isadora Saraiva
// link: https://github.com/tryber/sd-020-b-project-pixels-art/pull/6

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
