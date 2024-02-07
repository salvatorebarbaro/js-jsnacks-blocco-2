// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// inserimento di un numero 
let number;
    // inizio ciclo
    while(number != "exit")
    {

    // numero inserito
    number = (prompt("Inserisci un numero o inserisci 'exit' per uscire"));

    if(number!= "exit")
    {
       if(number % 2 == 0)
    {
        document.getElementById("stringa").innerText=`questo è il numero positivo inserito ${number}`
    }
    else{
        // numero +1
        number++;
        // stampaggio a schermo
        document.getElementById("stringa").innerHTML=`questo è il numero negativo inserito ${number} a cui è stato aggiunto 1` 
    } 
    }
    else
    {
        alert("inserire un altro numero o confermare exit");
    }

    
    
    }
    



