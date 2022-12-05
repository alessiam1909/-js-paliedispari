
function invertiParola(word)
{
    let wordInversa = word.split('').reverse().join('');
    return wordInversa;
    
};

let parola = prompt("Inserisci una parola per verificare se è palindroma oppure no:");

let parolaFinale = parola.toLowerCase();

let parolaInversa = invertiParola(parolaFinale);
console.log(parolaInversa);

if(parola == parolaInversa){
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
};

