let mainContainer = document.querySelector('#main-container');




for (let x = 1; x <= 16; x++){    
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    for (let i = 1; i <= 16; i++){
        let div = document.createElement('div');
        div.setAttribute('id', `item`);
        container.appendChild(div);
        console.log(i);
    }
    mainContainer.appendChild(container);
}

