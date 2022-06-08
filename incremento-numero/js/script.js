// Chiediamo un numero 
// all'utente e stampiamo 
// il numero successivo

// Al click sul bottone submit
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click',
    function() {
        // prendere il numero dell'utente
        let userNumber = parseInt( document.getElementById('user-info').value );
        
        // sommare 1 al numero
        userNumber++;

        // stampare il numero
        document.getElementById('user-message').innerHTML = userNumber;
    }
);