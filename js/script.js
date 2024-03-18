// seleziono il conteiner in cui andranno i blocchi
const gridContainer = document.querySelector('#container');
//al click del bottone play data la difficoltà creo la griglia desiderata
const playButton = document.querySelector('#play');
const bombsArray = [];

let randomBombs ;
let blockNumbers;
//interruttore gioco
let playState;
playButton.addEventListener('click', function() {
    playState = 'playing';
    //generazione bombe da pusciare nell'array senza duplicati
    
    gridContainer.innerHTML = '';
    let difficultSelector = document.querySelector('#difficult').value;
    if (difficultSelector === 'easy') {
        blockNumbers = 100;
        
    } else if (difficultSelector === 'medium') {
        blockNumbers = 81;
        
    } else {
        blockNumbers = 49;
        
        for(let i = 0; i < 16; i++){
            randomBombs= Math.floor(Math.random() * blockNumbers) + 1;
            console.log(randomBombs);
            if(!bombsArray.includes(randomBombs)){
                bombsArray.push(randomBombs)
            }else {
                i--;
            }
        
            }
            console.log(bombsArray);



    }
    for(let i=1; i <= blockNumbers; i++) {
        const newBlock = generateBlock(i, bombsArray);

        if (blockNumbers === 100){
            newBlock.classList.add('dif-easy');
        } else if (blockNumbers === 81){
            newBlock.classList.add('dif-med');

        }else {
            newBlock.classList.add('dif-hard');

        }

         //appendo i blocchi con le apposite classi
        gridContainer.append(newBlock);
        
        newBlock.addEventListener('click', function() {
            //controllo numero nella blacklist
                if (bombsArray.includes(i)){
                    this.innerHTML = 'hai perso';
                }
                newBlock.classList.add('blue');

            });
    }
    
    
});







//creo funzione che crea i blocchi
function generateBlock(number, blackListArray, playState)
{
    const newBlock = document.createElement('div');
    newBlock.classList.add('block');
    newBlock.innerHTML = `<span>${number}</span>`;
    //aggiungo evento click sul blocco
    return newBlock;
}