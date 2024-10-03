//creo una variabile per il giocatore
let player = Math.floor(Math.random() * 6) + 1;
console.log(player);


//creo una variabile per il computer
let computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

//creo il programma per stabilire il vincitore tra il giocatore e il computer
if (player > computer) {
    console.log('Hai vinto player');
    
}else if (computer > player) {
    console.log('il computer ti ha battuto');
    
}else {
    console.log('Pareggio');
    
}
