// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100
// alla volta, se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.


// Mi creo una funzione che generi 16 numeri casuali da 1 a 5
var casnum;
var myArray = [];

  for (var i = 0; i < 16; i++){
    casnum = Math.floor((Math.random() * 100) + 1);
    myArray.push(casnum);
  }

console.log(myArray);

// Chiedo all'utente di inserire un numero da 1 a 100

// var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//
// while (numUtente < 1 || numUtente > 100 || isNaN(numUtente)) {
//   alert("Il numero deve essere compreso tra 1 e 100");
//   numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//   if (isNaN(numUtente)) {
//   alert("Dev'essere un numero");
//   numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
// }
// }

// Stabilisco che se il numero si trova nell'array l'utente perde altrimenti
// gli faccio inserire un altro numero finchè non azzecca

// for (var i = 0; i < 16; i++){
// if (numUtente == myArray[i]) {
//   console.log("Utente ha perso");
// } else if (numUtente !== myArray[i]) {
//   var numUtente = parseInt(prompt("Inserisci un altro numero da 1 a 100"));
//   console.log(numUtente);
// }
// }


// for (var i=0; i < 16; i++) {
//   var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//
//   while (numUtente < 1 || numUtente > 100 || isNaN(numUtente)) {
//     alert("Il numero deve essere compreso tra 1 e 100");
//     numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//     if (isNaN(numUtente)) {
//     alert("Dev'essere un numero");
//     numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//   }
//   if (myArray.includes(numUtente)){
//     console.log("Utente ha perso");
//   }
// }



var messaggio;
var i = 0;
var trovato = false;
while (i < 16 && trovato == false) {
  console.log("primo while" + i);
  var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log(numUtente < 1);
  console.log(numUtente > 100);
  console.log(isNaN(numUtente));
  console.log(numUtente < 1 || numUtente > 100 || isNaN(numUtente));
  while (numUtente < 1 || numUtente > 100 || isNaN(numUtente)) {
    messaggio = "Il numero deve essere compreso tra 1 e 100";
    if (isNaN(numUtente)) {
    messaggio = "Dev'essere un numero";
    }
    alert(messaggio);
    numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  }
  if (myArray.includes(numUtente)){
    console.log("variabile trovato" + trovato);
    trovato = true;
    console.log("Utente ha perso");
  }
  if (i == 15 && !myArray.includes(numUtente)){
    console.log("Utente ha vinto");
  }
i++;
}
var decr = i - 1;
console.log("Il punteggio dell'utente è " + decr);

// Devo stabilire il punteggio del giocatore
