var nomeUtente = prompt("Inserisci il tuo indirizzo e-mail");
var eMail = ["giulio@gmail.com","marco@gmail.com","luca@gmail.com"];
var trovato = false;

for (var i = 0; i < eMail.length; i++) {
  var mail = eMail[i];

  if (nomeUtente == mail) {
    trovato = true;
    alert("Utente riconosciuto :)")
  }

  else if (nomeUtente != mail)
    trovato = false;
    alert("Utente non riconosciuto :(")
}