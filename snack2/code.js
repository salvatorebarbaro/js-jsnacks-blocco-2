//  richiesta:
//  Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!



// stringa di codice usata per generare numero randomico compreso tra 1 e 100
// dichiarazione variabile pe ril numero randomico tra 1 e 100 math.floor usato per avere numeri interi
const number= Math.floor(Math.random() * 100)+1;
// restituisce numero sulla console
console.log(number);
// dichiarazione numero user 
let number_user;
// ciclo
let count=0;
do {

    if(number == null)
    {
        break;
    }
    // prompt per chiedere numero all'utente
    number_user=prompt("inserire numero utente");
    // contatore errore
    if(number_user != number)
    {
        count+=1;
    }

    // prima condizione
    if(number_user < number)
    {
        alert("il numero da te inserito è più basso!");

    }
    // seconda
    else if(number_user > number)
    {
        alert("il numero da te inserito è più alto!");

    }
    // risultato
    else
    {
        document.getElementById("risultato").innerText=`il numero da te inserito è corretto !! ${number} ed hai sbagliato ${count}volte`;
    }
    
}
// problema riscontrato era il !== perchè lui faceva un confronto tra una stringa ed un numero e quindi non usciva mai dal loop (condizione che fa continuare il loop è number user diverso da number e number user diverso da null)
while (number_user != number && number_user != null);