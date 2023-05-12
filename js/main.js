//richiamo la funzione 
const numeriGenerati = createdNumRandomOrder(100);
console.log(numeriGenerati);

//stampo in pagine i numeri generati 
const numeriRand = document.getElementById("numerirand")
numeriRand.innerHTML = numeriGenerati;

//timer 30 secondi 
setTimeout(eliminationNumber,3000);

const seconds = 5;


//funzioni 

    function eliminationNumber() {
        for (let i = 0; i < 5; i++) {
            let numUser =parseInt(prompt("inserisci i numeri che hai visto uno alla volta"))
       
            if (numeriGenerati.includes(numUser)) {
                console.log("hai vinto");
            }else{
                console.log("hai perso");
            }
            
        }
       
    }


function createdNumRandomOrder(max) {
    const numArr = [];
    while (numArr.length < 5) {
        const nuovoNum = numeriRandom(1,max);

        if (!numArr.includes(nuovoNum)) {
            numArr.push(nuovoNum);
        }

    }
    return numArr;
}

function numeriRandom(nuovoMin, nuovoMax) {
    return Math.floor(Math.random() * (nuovoMax - nuovoMin + 1) + nuovoMin);

    
}



