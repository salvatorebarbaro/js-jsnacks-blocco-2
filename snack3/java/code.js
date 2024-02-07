// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5

// dichiaro 2 array 
const primoarray=[];
const secondoarray=[];
// definizione variabile larghezza che diventera la larghezza dei nostri array
let width1=parseInt(prompt("impostare lumghezza primo array"));
let width2=parseInt(prompt("impostare lumghezza secondo array"));

// associazuione lunghezza array
primoarray.length=(width1);
secondoarray.length=(width2);

// dichiarazione variabili somma
let i=0;
let j=0;
let add_element=0;

do {
    if(primoarray.length < secondoarray.length)
    {
        primoarray.length ++;
        i+1;
        add_element=i;
        console.log(primoarray);
    }
    else if(primoarray.length > secondoarray.length)
    {
        secondoarray.length ++;
        j+1;
        add_element=j;
        console.log(secondoarray)
    }
    else
    {
        document.querySelector("#stringa").innerText=`Gli array avevano lunghezza ${width1} per il primo e ${width2} infatti l'aumento di elementi è stato di ${add_element}`;

    }
    
} while (primoarray.length !== secondoarray.length);
