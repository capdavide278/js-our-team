/*Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/

const container = document.getElementsByClassName("team-container");


const azienda = 
[
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "img.src" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief editor",
        "img.src" :  "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "img.src" :  "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "img.src" :  "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "img.src" :  "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "img.src" :  "img/barbara-ramos-graphic-designer.jpg"
    }

];


 console.log(azienda);


 for (let i = 0; i < azienda.length; i ++) {
    let stuff = azienda[i];

    const card = document.createElement('div');
    card.classList.add('team-card');

    const img = document.createElement('div');
    img.classList.add('card-image');

    const profilo = document.createElement("img");
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

    img.src = stuff["img.src"];
    container.append(card);

    console.log(card);
 }