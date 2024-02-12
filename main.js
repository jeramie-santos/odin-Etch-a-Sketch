let mainContainer = document.querySelector('#main-container');
let canvas = document.querySelector('#canvas-size');
let btn = document.querySelector('#btn-square');

const RGB_RED = '255, 0, 0';
const RGB_ORANGE = '255, 160, 16';
const RGB_YELLOW = '255, 224, 32';
const RGB_GREEN = '0, 192, 0';
const RGB_BLUE = '0, 32, 255';
const RGB_PURPLE = '160, 32, 255';
const RGB_BLACK = '0, 0, 0';
const RGB_GREY = '128, 128, 128';



btn.addEventListener('click', createCanvas);


for (let x = 1; x <= 16; x++){    
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    for (let i = 1; i <= 16; i++){
        let div = document.createElement('div');
        div.setAttribute('class', `item`);
        container.appendChild(div);
    }
    mainContainer.appendChild(container);
}

let items = document.querySelectorAll('.item');

for (let i = 0; i <= items.length; i++){
    items[i].addEventListener('mouseover', function(){
        items[i].style.cssText = `background: rgb(${getRgbColor()})`;
    });
}

canvas.textContent = `Canvas size 16 x 16`;



function createCanvas(){
    
    let containers = document.querySelectorAll("#container");

    for (let y = 0; y <= containers.length - 1; y++){
        mainContainer.removeChild(containers[y]);
    }

    let numberOfSquares = parseInt(prompt("Enter the num ber of squares per side"));
    
    if (numberOfSquares >= 100){
        numberOfSquares = 100;
        for (let x = 1; x <= numberOfSquares; x++){    
            let container = document.createElement('div');
            container.setAttribute('id', 'container');
            for (let i = 1; i <= numberOfSquares; i++){
                let div = document.createElement('div');
                div.setAttribute('class', `item`);
                container.appendChild(div);
            }
            mainContainer.appendChild(container);
        }   
    }else {
        for (let x = 1; x <= numberOfSquares; x++){    
            let container = document.createElement('div');
            container.setAttribute('id', 'container');
            for (let i = 1; i <= numberOfSquares; i++){
                let div = document.createElement('div');
                div.setAttribute('class', `item`);
                container.appendChild(div);
            }
            mainContainer.appendChild(container);
        }
    }

    canvas.textContent = `Canvas size ${numberOfSquares} x ${numberOfSquares}`;

    let items = document.querySelectorAll('.item');

    for (let i = 0; i <= items.length; i++){
        items[i].addEventListener('mouseover', function(){
            items[i].style.cssText = `background: rgb(${getRgbColor()})`;
        });
    }

    
}


function getRgbColor(){
    let rgbColor;
    let num = Math.floor((Math.random() * 8) + 1);
    if (num == 1){
        rgbColor = RGB_BLUE;
    } else if (num == 2){
        rgbColor = RGB_ORANGE;
    } else if (num == 3){
        rgbColor = RGB_YELLOW;
    }else if (num == 4){
        rgbColor = RGB_GREEN;
    } else if (num == 5){
        rgbColor = RGB_BLUE;
    } else if (num == 6){
        rgbColor = RGB_PURPLE;
    } else if (num == 7){
        rgbColor = RGB_BLACK;
    } else if (num == 8){
        rgbColor = RGB_GREY;
    }

    return rgbColor;
}

