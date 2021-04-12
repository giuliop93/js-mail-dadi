

var utente = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

if (utente > computer) {
  console.log(utente + " è maggiore di " + computer + " Hai vinto!");

} else if (utente == computer) {
  console.log(utente + "è uguale a" + computer + "avete pareggiato");
} else {
  console.log(computer + " è maggiore di " + utente + " Hai perso!");
}

