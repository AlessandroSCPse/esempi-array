const names = ['Giorgio', 'Luca', 'Camilla'];
console.log(names);
// console.log( names[0] );
// console.log( names[1] );
// console.log( names[2] );

for(let i = 0; i < names.length; i++) {
    // In names[i] ho a disposizione 
    // per ogni iterazione
    // il singolo elemento dell'array names
    const thisName = names[i];
    console.log(thisName);
}
