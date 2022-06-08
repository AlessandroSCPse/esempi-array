// dato un array di numeri interi, stampare tutti i numeri dispari

const numbers = [10, 15, 2, 33, 55, 20, 22];
// Scorro gli elementi dell'array
for(let i = 0; i < numbers.length; i++) {
    // Per ogni elemento:
    const thisNumber = numbers[i];
    
    // Se è dispari lo stampo
    if(thisNumber % 2 !== 0) {
        console.log(thisNumber);
    }
}