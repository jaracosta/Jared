let escanorNightImg, escanorDayImg, escanorFinalImg;
let firstDemonImg, finalDemonImg;
let nightBgImg, dayBgImg, finalBgImg;
let dialogBubbleImg;

const gameState = {
    playerHealth: 100,
    enemyHealth: 100,
    phase: 'night',
    dialogueIndex: 0,
    dialogues: [
        { speaker: 'Demonio Mujer', text: 'Huh? ¿Quién eres tú? Eres tú de nuevo humano?~' },
        { speaker: 'Demonio Mujer', text: 'Dime, verdad que no eres humano verdad?' },
        { speaker: 'Escanor', text: 'Quién lo diría, un ser inferior ante mí? Quién lo diría que te quedarías para tan solo morir.' },
        { speaker: 'Escanor', text: 'En fin, respondiendo tu pregunta... Soy Humano. Pero también soy aquel que se alza encima de todas las razas.' },
        { speaker: 'Demonio Mujer', text: '¡Qué orgulloso eres humano~!' },
        { speaker: 'Escanor', text: 'Sí, porque eso soy. Soy Escanor, el león de los 7 pecados capitales.' },
        { speaker: 'Escanor', text: 'Puedes llamarme... majestad Escanor.' },
    ]
};

function preload() {
    escanorNightImg = loadImage('WeakEscanor.png');
    escanorDayImg = loadImage('DayEscanor.png');
    escanorFinalImg = loadImage('Escanor.jpg');
    firstDemonImg = loadImage('FirstDemon.png');
    finalDemonImg = loadImage('FinalDemon.png');
    nightBgImg = loadImage('NightEscene.png');
    dayBgImg = loadImage('Day.png');
    finalBgImg = loadImage('Escena.jpg.webp');
    dialogBubbleImg = loadImage('TextBubble.png');
}

function setup() {
    createCanvas(800, 600);
    updateHealthBars();
    document.getElementById('background').style.backgroundImage = "url('NightEscene.png')";
}

function draw() {
    if (gameState.phase === 'night') {
        image(escanorNightImg, 100, 300, 150, 300);
        image(firstDemonImg, 550, 300, 150, 300);
    } else if (gameState.phase === 'day') {
        image(escanorDayImg, 100, 300, 150, 300);
        image(firstDemonImg, 550, 300, 150, 300);
    }
    drawHealthBars();
}

function drawHealthBars() {
    fill(51);
    rect(100, 250, 150, 20);
    fill(214, 40, 40);
    rect(100, 250, gameState.playerHealth * 1.5, 20);
    fill(51);
    rect(550, 250, 150, 20);
    fill(106, 4, 15);
    rect(550, 250, gameState.enemyHealth * 1.5, 20);
}

function showDialogue(speaker, text) {
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueText = document.querySelector('.dialogue-text');
    dialogueBox.style.display = 'block';
    dialogueText.innerHTML = `<div class="character-name">${speaker}</div><div>${text}</div>`;
}

function nextDialogue() {
    if (gameState.dialogueIndex < gameState.dialogues.length) {
        const d = gameState.dialogues[gameState.dialogueIndex];
        showDialogue(d.speaker, d.text);
        gameState.dialogueIndex++;
    } else {
        document.getElementById('dialogue-box').style.display = 'none';
        transformToDay();
    }
}

function playerAttack() {
    if (gameState.phase === 'night') {
        gameState.enemyHealth -= 10;
        gameState.playerHealth -= 15;

        if (gameState.playerHealth <= 0) {
            gameState.playerHealth = 0;
            setTimeout(() => {
                document.querySelector('#player-character img').src = "WeakEscanor.png";
                showDialogue('Demonio Mujer', '*Ríe* Patético humano...');
                setTimeout(nextDialogue, 2000);
            }, 500);
        }
    } else {
        gameState.enemyHealth -= 30;
        if (gameState.enemyHealth <= 0) {
            gameState.enemyHealth = 0;
            alert('¡Demonio derrotado!');
        }
    }
    updateHealthBars();
}

function transformToDay() {
    gameState.phase = 'day';
    document.getElementById('background').style.backgroundImage = "url('Day.png')";
    document.querySelector('.time-indicator').textContent = 'DÍA';
    document.querySelector('#player-character img').src = "DayEscanor.png";
    gameState.playerHealth = 150;
    updateHealthBars();

    setTimeout(() => {
        showDialogue('Escanor', '¡Dices que mis ataques no tienen efecto sobre ti?');
        setTimeout(() => {
            showDialogue('Escanor', '¿Y quién lo decidió?');
            setTimeout(() => {
                showDialogue('Demonio Mujer', '¡Jamás vi su ataque contra mí!');
                setTimeout(() => {
                    showDialogue('Escanor', 'Ahora sol cruel... soy el único que decide. Muere.');
                    document.getElementById('background').style.backgroundImage = "url('Escena.jpg.webp')";
                    const escanorImage = document.createElement('img');
                    escanorImage.src = "Escanor.jpg";
                    escanorImage.style.position = 'absolute';
                    escanorImage.style.top = '0';
                    escanorImage.style.left = '0';
                    escanorImage.style.width = '100%';
                    escanorImage.style.height = '100%';
                    escanorImage.style.zIndex = '999';
                    escanorImage.classList.add('appear');
                    document.body.appendChild(escanorImage);
                    setTimeout(() => {
                        document.querySelector('#enemy-character img').src = "FinalDemon.png";
                        gameState.enemyHealth = 0;
                        updateHealthBars();
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 1000);
}

function updateHealthBars() {
    const playerBar = document.querySelector('#player-health .health-fill');
    const enemyBar = document.querySelector('#enemy-health .health-fill');
    playerBar.style.width = gameState.playerHealth + '%';
    enemyBar.style.width = gameState.enemyHealth + '%';
}
