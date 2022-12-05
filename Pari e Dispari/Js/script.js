let pariDispari = prompt("Scegli pari o dispari:").toLowerCase();

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(numeroUtente);

function numeroPc()
{
    num = Math.round(Math.random() * 4 )+ 1;
    console.log(num);
    return num;
}

numeroPc();

function somma()
{
    let somma = numeroUtente + num;
    console.log(somma);

    if(somma % 2 == 0){
        console.log("la somma è pari");
        if(pariDispari=="pari"){
            alert("Hai vinto!!");
        } else{
            alert("Hai perso:(");
        }
        
        
    } else{
        console.log("La somma è dispari");
        if(pariDispari=="dispari"){
            alert("Hai vinto!!");
        } else{
            alert("Hai perso:(");
        }
    };
}

somma(numeroUtente + num);