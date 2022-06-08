// Chiediamo un numero all'utente e stampiamo 
// l'elemento che si trova nella posizione 
// indicata dall'utente all'interno dell'array. 
const names = ['Luca', 'Maria', 'Camilla'];

// Al click sul button
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',
    function() {
        // Leggere il numero che ci da l'utente
        const userIndex = parseInt( document.getElementById('user-info').value );

        // Stampiamo l'elemento solo se il numero dell'utente
        // è >= 0 e deve anche essere <= all'ultimo indice
        if(userIndex >= 0 && userIndex <= (names.length - 1)) {
            // Stampare nel div il messaggio appropriato (elemento dell'array)
            const arrayElement = names[userIndex];
            document.getElementById('user-message').innerHTML = arrayElement;
        } else {
            document.getElementById('user-message').innerHTML = 'Elemento non esistente';
        }
    }
);