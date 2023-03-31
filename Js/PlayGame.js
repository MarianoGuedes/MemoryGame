const gridCreator = document.querySelector('.gridCards');

const playerSpan = document.querySelector('.playerInfo');

const timerMinutes = document.querySelector('.timerMin');

const timerSeconds = document.querySelector('.timerSec');

const refreshButton = document.querySelector('.buttonRestart');

const endGameCheck = () => {
  const cardsDisables = document.querySelectorAll('.cardDisable');

  if (cardsDisables.length === 20){
    clearInterval(this.loop);
    alert('Parabens, você ganhou');
  }
}

const cardsCheck = () => {
  const characterFirts = cardFirts.getAttribute('data-character');
  const characterSecond = cardSecond.getAttribute('data-character');

  if (characterFirts === characterSecond){

    cardFirts.firstChild.classList.add('cardDisable')
    cardSecond.firstChild.classList.add('cardDisable')

    cardFirts = '';
    cardSecond = '';

    endGameCheck();

  } else {
    setTimeout(() => {
      cardFirts.classList.remove('cardReveal');
      cardSecond.classList.remove('cardReveal');

      cardFirts = '';
      cardSecond = '';
    }, 500);
  }
}

const cardLists = [
  'Bill',
  'Tess',
  'Joel',
  'Ellie',
  'Frank',
  'Henry',
  'Sarah',
  'Tommy',
  'ClickerCard',
  'Marlene'
]

let cardFirts = '';
let cardSecond = '';

const cardReveal = ({target}) => {

  if (target.parentNode.className.includes('cardReveal')){
    return;
  }

  if (cardFirts === ''){
    target.parentNode.classList.add('cardReveal')
    cardFirts = target.parentNode;

  } else if (cardSecond === ''){
    target.parentNode.classList.add('cardReveal')
    cardSecond = target.parentNode;

    cardsCheck();

  }

}

const elementCreator = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const cardCreator = (cardList) => {
  const card = elementCreator('div','cards');
  const cardBack = elementCreator('div','card Back');
  const cardFront = elementCreator('div','card Front');

  cardFront.style.backgroundImage = `url('../Images/${cardList}.png')`;

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  card.addEventListener('click', cardReveal);

  card.setAttribute('data-character', cardList)

  return card;

}

const gameLoad = () => {

  const cardListsDuplicate = [ ...cardLists, ...cardLists ];

  const arrayShuffled = cardListsDuplicate.sort(() => Math.random() - 0.5);

  arrayShuffled.forEach((cardList) =>{
    const card = cardCreator(cardList);
    gridCreator.appendChild(card);
  })

}

const timerStart = () => {
}

let segundos = 0;
let minutos = 0;

function segundo(){
    //incrementa os segundos
    segundos++;
    if(segundos==60){
        //incrementa os minutos
        minutos++;
        //Zerar os segundos
        segundos=0;
        //escreve os minutos
        document.querySelector('.timerMin').innerHTML=minutos
    }
    //escreve os segundos
    document.querySelector('.timerSec').innerHTML=segundos
    
}

this.loop = setInterval(function(){ segundo() },1000)

refreshButton.addEventListener("click",() => {
  location.reload();
})

window.onload = () => {

  playerSpan.innerHTML = localStorage.getItem('Player');

  timerStart();
  gameLoad();

}



