// ****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste


const colBox = document.querySelector(".col"); 
const initBtn = document.querySelector("header button");
const BOMBS = 16;


/**
 * take the value of header select and start init of the value
 * value 1 100box in 10 per row
 * value 2 81box in 9 per row
 * value 3 49box in 7 per row
 */
initBtn.addEventListener("click", function(){
    const selectOption = parseInt(document.querySelector("header select").value);
    colBox.innerHTML="";
    switch (selectOption){
        case 1:
            init(100, 10);
            break
        case 2:
            init(81, 9);
            break
        case 3:
            init(49, 7);
            break
    }
    
})

/**
 * create and append box in colBox
 * @param {numb} numberOfBox 
 * @param {numb} boxInRow 
 */
function init(numberOfBox, boxInRow){
    for(let i = 0 ; i < numberOfBox ; i++){
        colBox.append(createBox(boxInRow));
    }
    setUpBombs();
}

/**
 * create a box who return it's number in console when clicked 
 * @param {numb} boxPerRow 
 * @returns 
 */
function createBox(boxPerRow){
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.width = calcCssWidth(boxPerRow)
    addSequentialNumber(div);
    setNumber(div);
    div.addEventListener("click", function(){
        console.log(this.number);
        div.classList.add("bg-primary")
    })
    return div
}


/**
 * given an arr  return an array of random number the same length of BOMBS
 * arr.lenght cant be > of BOMBS
 * @param {array} arr 
 * @returns 
 */
function randomBombSpot(arr){
    if (arr.length < BOMBS) return "Error arr > Bombs"

    const bombSpotArr = [];
    
    while (bombSpotArr.length < BOMBS){
        let ran = random(1, arr.length);
        if(!bombSpotArr.includes(ran)){
            bombSpotArr.push(ran);
        }
       
    }
    return bombSpotArr;
}

/**
 * return a random number between min and max (included)
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function random(min, max){
    return Math.floor(Math.random() * (max- min +1) + 1);
}


function setUpBombs(){
    let boxArr = getBoxArr();
    let bombArr = randomBombSpot(boxArr);
    for(let i = 0; i < bombArr.length; i++){
        const bombInBox = bombArr[i];
        getBoxByNumber(bombInBox).bomb = true;
    }
}

function getBoxArr(){
    return document.getElementsByClassName("box");
}

/**
 * given a number return the equivalent box
 * @param {*} number 
 * @returns 
 */
function getBoxByNumber(number){
    const arr = document.getElementsByClassName("box");
    for(let i = 0 ; i < arr.length; i ++){
        if (number === arr[i].number){
            return arr[i];
        }
    }
}


/**
 * return a string of "style.width" for the css
 * @param {numb} elementPerRow 
 * @returns 
 */
function calcCssWidth(elementPerRow){
    return `calc(100% / ${elementPerRow})`;
}

/**
 * 
 * @param {*} item 
 * @returns return the value of number of the item
 */
function getNumber(item){
    return item.number
}

/**
 * create an array of item class in html, get's the value of the last item 
 * @param {class} className 
 * @returns the last item.value +1 , or 0 if there are not
 */
function getLastNumber(className){
    const arr = document.getElementsByClassName(className);
    const lastItem = arr[arr.length-1];
    
    return lastItem ? getNumber(lastItem) : 0
}

function addSequentialNumber(item){
    let lastNumb = getLastNumber("box");
    item.number = lastNumb +1;

}

/**
 * add a sequential serie of number in every class item from 0
 * @param {class} className 
 */
function addNumbers(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        arr[i].number = i+1;
    }
}

/**
 * get a console log of every class item number in html
 * @param {class} className 
 */
function getAllNumber(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        console.log(arr[i].number);
    }
}

/**
 * set the number of every class item in it's textContent
 * @param {class} className 
 */
function printNumber(className){
    const arr = document.getElementsByClassName(className);
    for(let i = 0 ; i < arr.length; i ++){
        arr[i].textContent = arr[i].number;
    }
}

/**
 * set the number of the item in it's textContent
 * @param {} item 
 */
function setNumber(item){
    item.textContent = item.number
}

