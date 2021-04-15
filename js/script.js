// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: 'Atala',
        peso: 10,
    },
    {
        nome: 'Bianchi',
        peso: 7.4,
    },
    {
        nome: 'Pininfarina',
        peso: 12,
    },
    {
        nome: 'Shish',
        peso: 19,
    },
    {
        nome: 'Contrappali',
        peso: 88,
    },
];

let lessWeightIndex = 0;

for(let i = 0; i < bikes.length; i++) {

    if (bikes[i].peso < bikes[lessWeightIndex].peso) {
        lessWeightIndex = i;
    }
}

document.getElementById('min-bike').innerHTML = `
<span class="bike">${bikes[lessWeightIndex].nome}</span>
<div class="weight">
    <label for="weight">Peso:</label>
    <strong>${bikes[lessWeightIndex].peso}</strong>
</div>
`;


// jsnack 2
/**
 * Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno settate a 0
 * Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
 * Infine, usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo i nomi e i falli subiti e stampiamo tutti in console
 * Qui facciamo vedere anche block scope, const e let
 */

// Initial teams
const teams = [
    {
        name: 'Palermo',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Foggia',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Sassuolo',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Cagliari',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Pistoiese',
        points: 0,
        fouls: 0,
    },
];

for(let i = 0; i < teams.length; i++) {
    teams[i].points = randomNumber(0, 100);
    teams[i].fouls = randomNumber(0, 100);
}

// New array Results
let newArrayResults = [];

for(let i = 0; i < teams.length; i++) {
    let {name, fouls} = teams[i];
    newArrayResults.push({
        name,
        fouls,
    });
}

console.table(newArrayResults);

/**
 * FUNCTIONS
 */

/**
 * Generatore di numeri random
 * @param {number} min numero di partenza
 * @param {number} max numero massimo
 * @returns un numero random compreso tra min e max
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}