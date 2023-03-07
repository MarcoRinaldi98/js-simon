/*
    JAVASCRIPT
*/

const infoTimerDom = document.getElementById('infoTimer');
const numberDom = document.getElementById('number');
const risultatoDom = document.getElementById('risultato');

let secondi = 30;

//richiedo i numeri all'utente dopo 32 secondi dall'avvio della pagina
const richiestaNumeri = setTimeout(function() {
    infoTimerDom.classList.add('d-none');
    let numeriScritti = [];

for (let i = 0; i < 5; i++) {
    numeriScritti.push(parseInt(prompt('Inserisci un numero alla volta:')));
}
console.log(numeriScritti);

const indovinati = numeriIndovinati(cinqueNumeri, numeriScritti);
console.log(indovinati);

risultatoDom.innerHTML = `I numeri erano: ${cinqueNumeri};<br/> I numeri che hai scritto sono: ${numeriScritti};<br/> Quindi hai indovinato ${indovinati.length} numeri`;

}, 32000);

let cinqueNumeri = generate5RandomNumber(5);
console.log(cinqueNumeri);
numberDom.innerHTML = cinqueNumeri;

//mostro i numeri all'utente per 30 secondi
const mostroNumeri = setInterval( function() {
    if (secondi == 0) {
        clearInterval(mostroNumeri);
        numberDom.classList.add('d-none');
        infoTimerDom.innerHTML = `Tempo finito!`;
    } else {
        infoTimerDom.innerHTML = `Hai ancora ${secondi} secondi per memorizzare i numeri`;
        secondi--;
    }
}, 1000);


/*
    FUNZIONI
*/
//Funzione per vedere quanti numeri sono stati indovinati
function numeriIndovinati(cinqueNumeri, numeriScritti) {
    for (let i = 0; i < numeriScritti.length; i++) {
        let indovinati = [];
        if (cinqueNumeri.includes(numeriScritti[i])) {
            indovinati.push(numeriScritti[i]);
        } else {
            i++;
        }
        return indovinati;
    }
}

//Funzione per generare 5 numeri casuali unici da 1 a 100
function generate5RandomNumber(numeriDaGenerare) {
    //array contenente la lista delle bombe
    const numeriBase = [];
    //ciclo per generare le bombe
    for (let i = 0; i < numeriDaGenerare; i++) {
        numeriBase.push(generateRandomUniqueNumber(numeriBase, 1, 100));
    }
    return numeriBase;
}

//Funzione per generare un numero casuale UNICO
function generateRandomUniqueNumber(blacklist, min, max) {

    let valid = false;
    let randomNumber;
    //SE non è valido ripeto il ciclo
    while(!valid) {
        randomNumber = generateRandomNumber(min, max);
        //condizione di uscita dal ciclo
        if (!blacklist.includes(randomNumber)) {
            valid = true;
        }
    }
    return randomNumber;
}
 
//Funzione per generare un numero casuale
function generateRandomNumber(min, max) {
    const numeroCasuale = Math.floor(Math.random() * (max - min +1)) + min;
    return numeroCasuale;
}