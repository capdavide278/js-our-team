/*Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/

//dichiaro l' array di oggetti
const azienda = 
[
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief editor",
        "foto" :  "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" :  "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" :  "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" :  "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" :  "img/barbara-ramos-graphic-designer.jpg"
    }

];

//faccio una selezione sulla classe
let container = document.querySelector('.team-container');
 

//creo il for per stampare i dipendenti
 for (let i = 0; i < azienda.length; i ++) {
    let stuff = azienda[i];

    //creo l' elemento card che farà da container e lo collego a container
    const card = document.createElement('div');
    card.classList.add('team-card');
    container.append(card);
    
    //creo l' elemnto img collegandolo a card, e gli aggiungo il tag
    const img = document.createElement('div');
    img.classList.add('card-image');

    //creo l'elemento profilo e lo appendo nel tag
    const profilo = document.createElement("img");
    profilo.src = stuff.foto;
    img.append(profilo);

    //appendo img a card
    card.append(img);

    const text = document.createElement('div');
    text.classList.add('card-text');

    //creo gli elemnti h3 e p a cui verranno appesi nome e ruolo
    const Nome = document.createElement("h3");
    const Ruolo = document.createElement("p");
    text.append(Nome);
    text.append(Ruolo);

    //appendo text a card
    card.append(text);

    //richiamo gli oggetti 
    Nome.innerText = stuff.nome; 
    Ruolo.innerText = stuff.ruolo;

    console.log(card);
 }