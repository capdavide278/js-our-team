/*Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.*/


//creo la struttura dati
const azienda = 
[   
    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'img' :  'wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief editor',
        'img' :  'angela-caroll-chief-editor.jpg'
    },

    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'img' :  'walter-gordon-office-manager.jpg'
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'img' :  'angela-lopez-social-media-manager.jpg'
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'img' :  'scott-estrada-developer.jpg'
    },

    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'img' :  'barbara-ramos-graphic-designer.jpg'
    }

];


console.log(azienda);
//inserisco tutti i collaboratori
for (let i = 0; i < azienda.length; i ++) {
    let stuff = azienda[i];
    console.log(stuff);

}
