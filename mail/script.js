var nomeUtente = prompt("Inserisci il tuo indirizzo e-mail");
var eMail = ["giulio@gmail.com", "marco@gmail.com", "luca@gmail.com"];
var trovato = false;

for (var i = 0; i < eMail.length; i++) {
  var mail = eMail[i];

  if (nomeUtente == mail) {
    trovato = true;
  }
}

if (!trovato) {
  console.log("utente verificato")
} else {
  console.log()
}



