const magic8BallAnswers = [
    {fortune: 'not a chance', color: 'yellowgreen'},
    {fortune: 'do not count on it', color: 'blue'},
    {fortune: 'seems likely', color: 'green'},
    {fortune: 'it is a possibility', color: 'red'},
    {fortune: 'in the distant future', color: 'purple'},
    {fortune: 'not yet', color: 'orange'}
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const fortuneDisplay = document.querySelector('#fortune-display');
const fortuneButton = document.querySelector('#fortune-button');

fortuneButton.addEventListener("click", () => {
    let randomFortune = magic8BallAnswers[getRandomInt(6)];

    fortuneDisplay.innerHTML = randomFortune.fortune;
    fortuneDisplay.style.color = randomFortune.color;
})