// BONUS (*se e solo se avete concluso il caso base*):
// all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 =>
// da 1 a 80 con difficoltà 2=> da 1 a 50

// Mi creo una funzione che generi 16 numeri casuali da 1 a 5
var casnum = Math.floor((Math.random() * 100) + 1);
var myArray = [];

function casualNumber(num) {
  for (var i = 0; i < 16; i++){
    myArray.push(casnum);
  }
  }

casualNumber(myArray);
console.log(myArray);

// Chiedo all'utente di inserire un numero da 1 a 100

var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));

if (numUtente < 1 || numUtente > 100) {
  alert("Il numero deve essere compreso tra 1 e 100");
} else if (isNaN(numUtente)){
  alert("Dev'essere un numero");
}

// Stabilisco che se il numero si trova nell'array l'utente perde altrimenti
// gli faccio inserire un altro numero finchè non azzecca

for (var i = 0; i < 16; i++){
if (numUtente == myArray[i]) {
  console.log("Utente ha perso");
} else if (numUtente !== myArray[i]) {
  var numUtente = parseInt(prompt("Inserisci un altro numero da 1 a 100"));
}
}

// Devo stabilire il punteggio del giocatore
