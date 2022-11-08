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

    for(let key in memberTeam){
        console.log(memberTeam[key]);
    }

};

// 3. Stampare le stesse informazioni su DOM sottoforma di stringhe
const teamContainer = document.querySelector('.team-list')

for(let i = 0; i < team.length; i++) {

    const memberTeam = team[i];

    const listTeam =
    `
    <li class="memberteam">
        <div class="memberteam-image">${memberTeam.image}</div>
        <h3 class="memberteam-name">${memberTeam.fullname}</h3>
        <p class="memberteam-jobe">${memberTeam.job}</p>
    </li>
    `
    teamContainer.innerHTML += listTeam;
};