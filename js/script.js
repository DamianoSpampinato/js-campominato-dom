// seleziono il conteiner in cui andranno i blocchi
const gridContainer = document.querySelector('#container');
//al click del bottone play data la difficoltà creo la griglia desiderata
const playButton = document.querySelector('#play');
const bombsArray = [];
let randomBombs ;
let blockNumbers;
playButton.addEventListener('click', function() {
    //generazione bombe da pusciare nell'array senza duplicati
    for(let i = 0; i < 16; i++){
    randomBombs= Math.floor(Math.random() * 16) + 1;
    console.log(randomBombs);
    if(!bombsArray.includes(randomBombs)){
        bombsArray.push(randomBombs)
    }else {
        i--;
    }

    }
    console.log(bombsArray);

    gridContainer.innerHTML = '';
    let difficultSelector = document.querySelector('#difficult').value;
    if (difficultSelector === 'easy') {
        blockNumbers = 100;

    } else if (difficultSelector === 'medium') {
        blockNumbers = 81;

    } else {
        blockNumbers = 49;
        



    }
    for(let i=1; i <= blockNumbers; i++) {
        const newBlock = generateBlock(i);

        if (blockNumbers === 100){
            newBlock.classList.add('dif-easy');
        } else if (blockNumbers === 81){
            newBlock.classList.add('dif-med');

        }else {
            newBlock.classList.add('dif-hard');

        }
         //appendo i blocchi con le apposite classi
        gridContainer.append(newBlock);
    }
    
    
});






//creo funzione che crea i blocchi
function generateBlock(number){
    const newBlock = document.createElement('div');
    newBlock.classList.add('block');
    newBlock.innerHTML = `<span>${number}</span>`;
    //aggiungo evento click sul blocco
    newBlock.addEventListener('click', function() {
    newBlock.classList.add('blue');
    console.log(number);

    });
    return newBlock;
}