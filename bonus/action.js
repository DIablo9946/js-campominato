// BONUS (*se e solo se avete concluso il caso base*):
// all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 =>
// da 1 a 80 con difficoltà 2=> da 1 a 50


var casnum, livello, scelta;
var myArray = [];

  for (var i = 0; i < 16; i++){
    casnum = Math.floor((Math.random() * livello) + 1);
    myArray.push(casnum);
  }

console.log(myArray);

scelta = parseInt(prompt("Scegli la dificoltà del gioco tra 1 e 3"));

if (scelta == 1){
  livello = 100;
} else if (scelta == 2) {
  livello = 80;
} else {
  livello = 50;
}


var messaggio;
var i = 0;
var trovato = false;
while (i < 16 && trovato == false) {
  console.log("primo while" + i);
  var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log(numUtente < 1);
  console.log(numUtente > livello);
  console.log(isNaN(numUtente));
  console.log(numUtente < 1 || numUtente > livello || isNaN(numUtente));
  while (numUtente < 1 || numUtente > livello || isNaN(numUtente)) {
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
