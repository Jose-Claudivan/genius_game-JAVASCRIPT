let order = [];
let clickedOrder = [];
let score = 0;

//0 => verde
//1 => vermelho
//2 => amarelo
//3 => azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria orde aleatoria
let randomOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    },tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados estao corretos
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível...`);
        nextLevel();
    }
}

//seleciona a cor
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
    });

    checkOrder();
}

//funcao que retorna a cor
let creatColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Proximo nivel
let nextLevel = () => {
    score++;
    randomOrder();
}

