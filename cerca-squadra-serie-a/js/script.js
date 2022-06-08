// Chiediamo un nome di una squadra 
// all'utente e vediamo se la 
// squadra gioca in serie A
// Se gioca in seria A stampiamo gioca in seria A
// altrimenti stampiamo non gioca in seria A

const teamsA = ['Atalanta', 'Bologna', 'Cagliari', 'Empoli', 'Fiorentina', 'Genoa', 'Inter', 'Juventus', 'Lazio', 'Milan', 'Napoli', 'Roma', 'Salernitana', 'Sampdoria', 'Sassuolo', 'Spezia', 'Torino', 'Udinese', 'Venezia', 'Verona'];

const userTeam = prompt('Dimmi la tua squadra');

// Scorro l'array (col ciclo for)
// Una teamFound = false in cui salvo se la squadra fa parte dei team di serie A o no
// Per ogni elemento:
    // Controllo se myTeam si trova nell'array (con una if)
    // teamFound = true
let teamFound = false;
for(let i = 0; i < teamsA.length; i++) {
    const thisTeam = teamsA[i];
    
    if(thisTeam === userTeam) {
        teamFound = true;
    }
}

// teamFound === true allora dico all'utente che la squadra gioca in serie A
// Altrimenti non gioca in serie A
if(teamFound) {
    alert('La tua squadra gioca in serie A');
} else {
    alert('La tua squadra non gioca in serie A');
}