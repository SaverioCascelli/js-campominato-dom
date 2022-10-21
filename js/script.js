// **Consegna**
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


const colBox = document.querySelector(".col"); 
const initBtn = document.querySelector("header button");


/**
 * take the value of header select and start init in dependat of the value
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

