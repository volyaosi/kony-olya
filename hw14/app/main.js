import { getUser } from './service.js';
import { getCompatibility } from './table.js';
import { displayDescMsg, hideMsg } from './popup.js';

let users;
let compatibility = 0;
const zodiacList = ['♑','♒','♓','♈','♉','♊','♋','♌','♍','♎','♏','♐'];
let firstRequest = true;

const submit = document.querySelector('.submit-btn'),
      hiddenElems = document.querySelectorAll('.hide'),
      images = [...document.querySelectorAll('.images img')],
      zodiacSigns = [...document.querySelectorAll('.sign')],
      hearts = [...document.querySelectorAll('.heart')],
      radioList = [...document.querySelectorAll('input')],
      result = document.querySelector('.result');

function setUser(user){
    users.push(user);
    if(users.length == 2){
        users.forEach(({ picture, dob }, i) => {
            images[i].src = picture.large;
            zodiacSigns[i].textContent = zodiacList[new Date(dob.date).getMonth()];
        });
        compatibility = getCompatibility(users);
        console.log(compatibility);
    }
}

function renderCouple(){
    users = [];
    getUser(setUser, '?gender=female');
    getUser(setUser, '?gender=male');

    result.textContent = '';
    radioList.forEach(el => {
        el.disabled = false;
        el.checked = false;
    });

    if (firstRequest) {
        hiddenElems.forEach(el => el.classList.remove('hide'));
        firstRequest = false;
    }
}

// Events
submit.addEventListener('click', (e) => {
    e.preventDefault();
    renderCouple();
})

hearts.forEach(heart => heart.addEventListener('mouseout', () => hideMsg('.desc-msg')));

hearts.forEach(heart => heart.addEventListener('mouseover', e => {
    hideMsg('.desc-msg');
    displayDescMsg(e.target);
}));

radioList.forEach(radio => radio.addEventListener('change', e => {
    radioList.forEach(radio => radio.disabled = true);
    let guessNum = e.target.id;
    let max = guessNum;
    let min = guessNum != 100 ? guessNum - 9 : 100;
    let isGussedRes = (parseInt(compatibility) <= max) && (parseInt(compatibility) >= min) ? 'guessed' : 'did not guess';
    result.textContent = `You ${isGussedRes}. The compatibility is ${compatibility}`;
}));