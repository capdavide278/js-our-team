/*Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/

let stuff = document.getElementsByClassName("team-card")

//creo la struttura dati
const azienda = 
[   
    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        "img.src" : 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief editor',
        'img.src' :  'img/angela-caroll-chief-editor.jpg'
    },

    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'img.src' :  'img/walter-gordon-office-manager.jpg'
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'img.src' :  'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'img.src' :  'img/scott-estrada-developer.jpg'
    },

    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'img.src' :  'img/barbara-ramos-graphic-designer.jpg'
    }

];

    

/* console.log(azienda); */
//inserisco tutti i collaboratori
/* for (let i = 0; i < azienda.length; i ++) {
    stuff = azienda[i];
    console.log(stuff); */
    /* document.getElementsByClassName("team-card").innerHTML = azienda; */
/* }
document.getElementsByClassName("team-card").innerHTML = azienda; */

