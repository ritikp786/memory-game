const card = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
]

card.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    card.forEach((element, i) => {
        const createdCard = document.createElement('img');
        createdCard.setAttribute('src', 'images/blank.png');
        createdCard.setAttribute("data-id", i);
        createdCard.addEventListener('click', flipCard);
        gridDisplay.appendChild(createdCard);
    });
}

createBoard();

function checkMatch(){

    const rotatedCards = document.querySelectorAll('#grid img');
    console.log(rotatedCards);

    if(cardsChosenIds[0] == cardsChosenIds[1]){
        rotatedCards[cardsChosenIds[0]].setAttribute('src','images/blank.png');
        rotatedCards[cardsChosenIds[1]].setAttribute('src','images/blank.png');
        alert("You clicked the same image!")
    }

    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match!');
        rotatedCards[cardsChosenIds[0]].setAttribute('src','images/white.png');
        rotatedCards[cardsChosenIds[1]].setAttribute('src','images/white.png');
        rotatedCards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        rotatedCards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }

    else{
        rotatedCards[cardsChosenIds[0]].setAttribute('src','images/blank.png');
        rotatedCards[cardsChosenIds[1]].setAttribute('src','images/blank.png');
        alert('sorry try again :)');
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == (card.length/2)){
        resultDisplay.textContent = "Congratulations you found them all :)"
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(card[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log(cardsChosen);
    console.log('clicked', cardId);

    this.setAttribute('src',card[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch, 1000);
    }
}