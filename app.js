const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jfif',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jfif',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jfif',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jfif',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jfif',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jfif',
    },
    {
        name: 'fries',
        img: 'images/fries.jfif',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jfif',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jfif',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jfif',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jfif',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jfif',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const result = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jfif')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jfif')
        cards[optionTwoId].setAttribute('src', 'images/blank.jfif')
        alert('you have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jfif')
        cards[optionTwoId].setAttribute('src', 'images/white.jfif')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jfif')
        cards[optionTwoId].setAttribute('src', 'images/blank.jfif')
        alert('sorry try again')
    }
    result.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length == cardArray.length/2) {
        result.textContent = 'congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}