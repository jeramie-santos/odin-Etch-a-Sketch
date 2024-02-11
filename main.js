let mainContainer = document.querySelector('#main-container');
let canva = document.querySelector('#canva-size');
let btn = document.querySelector('#btn-square');

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

canva.textContent = `Canvas size 16 x 16`;


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

    canva.textContent = `Canvas size ${numberOfSquares} x ${numberOfSquares}`;

    let items = document.querySelectorAll('.item');

    for (let i = 0; i <= items.length; i++){
        items[i].addEventListener('mouseover', function(){
            items[i].style.cssText = "background: gray";
        });
    }
    
}


let items = document.querySelectorAll('.item');

for (let i = 0; i <= items.length; i++){
    items[i].addEventListener('mouseover', function(){
        items[i].style.cssText = "background: gray";
    });
}





