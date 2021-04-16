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

console.log('***** JSNACK 2 *****');

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
 * JS Snack 3
 * Sis scriva una funzione che accetti tre argomenti:
 * un array e due numeri (a più piccolo di b)
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
 */

console.log('***** JSNACK 3 *****');

const myArray = ['Paolo', 'Fabio', 'Lorenzo', 'Didier', 'Alexandre', 'Salvatore'];

let min = parseInt( prompt('Inserisci un numero tra 0 e 5') );
while(isNaN(min) || min < 0 || min > myArray.length) {
    min = parseInt( prompt('Inserisci un numero tra 0 e 5') );
}

let max = parseInt( prompt('Inserisci un numero tra ' + min + ' e 5') );
while(isNaN(max) || max < min || max > myArray.length) {
    max = parseInt( prompt('Inserisci un numero tra ' + min + ' e 5') );
}

// let newArray = [];


// filterArray( myArray, min, max)
// filterArrayForEach(min, max);
// console.log(newArray);


const newFilterArray = myArray.filter((element, index) => {
    return min <= index && max >= index;
});

console.log('Array originale', myArray);

console.log('Array Filtrato:', newFilterArray);


// Bonus

console.log('***** BONUS *****');

const arrayObj = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red',
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue',
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black',
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink',
    },
];


const newArrayObj = arrayObj.map((element) => {
    const newElement = {
        ...element,
        position: randomNumber(0, 5)
    }

    return newElement;
});


console.log('Array originale', arrayObj);

console.log('Nuovo array:', newArrayObj);





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


// function filterArray(arr, min, max) {
//     for(let i = 0; i < arr.length; i++) {
//         const tmp = arr[i];
//         if (min <= i && max >= i) {
//             newArray.push(tmp);
//         }
//     }
// }

// function filterArrayForEach(min, max) {
//     myArray.forEach((element, index) => {
//         if (min <= index && max >= index) {
//             newArray.push(element);
//         }
//     });
// }