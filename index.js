const board = document.querySelector('.board');
const boxG1 = [1,2,3,9,10,11,17,18,19,25,26,27];
const boxG2 = [6,7,8,14,15,16,22,23,24];
const boxG3 = [4,5,12,13,20,21,28];

for (let i=0; i<4; i++){
    for(let i=0; i<8; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        if(i % 2 === 0){
            cell.classList.add('black');
        }else{
            cell.classList.add('white');
        }
        board.appendChild(cell);
    }
    for(let i=0; i<8; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        if(i % 2 === 0){
            cell.classList.add('white');
        }else{
            cell.classList.add('black');
        }
        board.appendChild(cell);
    }
}

const whiteBoxes = document.querySelectorAll('.white');

for (let i = 0; i<32; i++) {
    if(i < 12) {
        whiteBoxes[i].classList.add('red-on');
    }else if(i >= 20) {
        whiteBoxes[i].classList.add('black-on');
    }else {
        whiteBoxes[i].classList.add('free');
    }
    whiteBoxes[i].setAttribute('id',i+1)
}
let previousBox = null;
function clickListener() { 
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('open-spot')){
            e.target.classList.add('red-on');
            e.target.classList.remove('free');
            previousBox.classList.remove('red-on');
        }
        if(e.target.classList.contains('white')) {
            let clicked = document.querySelector('.clicked');
            let hint = document.querySelectorAll('.open-spot');
            if(clicked !== null) {
                clicked.classList.remove('clicked');
            }
            if(hint !== null) {
                hint.forEach((e) => {
                    e.classList.remove('open-spot');
                })
            }
            e.target.classList.add('clicked');
            let id = parseInt(e.target.id);
            if(boxG1.includes(parseInt(id)) && !(e.target.classList.contains('free'))){
                console.log(id);
                previousBox = document.getElementById(id);
                let mov1 = document.getElementById(id+4);
                let mov2 = document.getElementById(id+5);
                if(mov1.classList.contains('free')){
                    mov1.classList.add('open-spot');
                }
                if(mov2.classList.contains('free')){
                    mov2.classList.add('open-spot');
                }
            }
            //console.log('box '+ id)
        }else{
            console.log('nop')
        }
    })
}

clickListener();