// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

// 1 creare array vuoto
// 2 chiedere all'utente tramite o un prompt o senno attraverso degli elementi a schermo di inserire i numeri
// 3
const array_view=document.getElementById("array_view");

// dichiarazione array
const numbers=[];

// dichiarazione variabile
        let sum=0;

// selezione del bottone con azione allegata
document.querySelector("button").addEventListener("click",
function()
{
    // let n 

    // condizione
    do {

        // n = parseInt(prompt("Inserisci un numero"));

        
        // 
        const n = parseInt(document.getElementById("inserisci_caratteri").value)
        
        if (sum + n > 50) {
            alert("La somma dei numeri supererebbe 50. Inserisci un numero più piccolo.");
            return; // Interrompi l'esecuzione della funzione
        }

        // inseriemnto valore nell'array
        numbers.push(n);
        
        // operazione
        sum += Number(n);
        
    } while (sum < 50);
    console.log(numbers);
    
    const element = document.createElement("div");
    // element += numbers;
    element.classList.add("row", "text-center");
    // Visualizza l'array come stringa separata da virgole tramite l'applicazione di join che praticamente ci riporta il contenuto dell'array come una stringa
    element.textContent = numbers.join(", "); 
    
    array_view.append(element);
    alert("La somma dei numeri ha raggiunto 50.");
}
    
)