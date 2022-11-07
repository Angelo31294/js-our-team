"use strict"
// 1. Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        fullname: 'Wayne Barnett',
        job: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        fullname: 'Angela Caroll',
        job: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        fullname: 'Walter Gordon',
        job: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        fullname: 'Angela Lopez',
        job: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        fullname: 'Scott Estrada',
        job: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        fullname: 'Barbara Ramos',
        job: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

// 2. Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < team.length; i++) {
    const memberTeam = team[i];
    console.log(memberTeam);
    // 3. Stampare le stesse informazioni su DOM sottoforma di stringhe
    const listTeam = 
    `
    <li>
        <h3>${memberTeam.fullname}</h3>
        <p>${memberTeam.job}</p>
        <img>${memberTeam.image}</img>
    </li>
    `
    document.getElementById('team-list').innerHTML += listTeam;
};
