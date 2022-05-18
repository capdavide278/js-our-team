/*Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/


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
 let container = document.querySelector('.team-container');
 
 for (let i = 0; i < azienda.length; i ++) {
    let stuff = azienda[i];

    const card = document.createElement('div');
    card.classList.add('team-card');
    container.append(card);
    
    const img = document.createElement('div');
    img.classList.add('card-image');

    const profilo = document.createElement("img");
    profilo.src = stuff.foto;
    img.appendChild(profilo);

    const text = document.createElement('div');
    text.classList.add('card-text');

    const Nome = document.createElement("h3");
    const Ruolo = document.createElement("p");
    text.appendChild(Nome);
    text.appendChild(Ruolo);

    card.append(img);
    card.append(text);

    Nome.innerText = stuff.nome; 
    Ruolo.innerText = stuff.ruolo;

    /* img.src = stuff.foto; */

    console.log(card);
 }