console.log('ciao');

//creo il prompt per inserire la mail
let insert_email = prompt('Inserisci la tua mail');
console.log(insert_email);


//creo l'array users
let users = ['Jacopo', 'Emanuele', 'Luca', 'Claudia', 'Giulia'];
console.log(users);


//creo l'array emails
let emails = ['Jacopo@gmail.com', 'Emanuele@gmail.com', 'Luca@gmail.com', 'Claudia@gmail.com', 'Giulia@gmail.com'];
console.log(emails);

//creo il programma per verificare se posso accedere oppure no
if (emails.includes(insert_email)) {
    console.log('Puoi accedere');
    
}else {
    console.log('accesso negato');
    
}

