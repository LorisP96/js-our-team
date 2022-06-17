// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

const teamMembers = [
    {
        name: 'Angela Caroll',

        role: 'Chief Editor',

        image: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',

        role: 'Office Manager',

        image: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',

        role: 'Social Media Manager',

        image: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',

        role: 'Developer',

        image: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',

        role: 'Graphic Designer',

        image: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

// const container = document.querySelector('.container');
// console.log(container);

const teamContainer = document.querySelector('.team-container');

// scorro l'array
for(let i = 0; i < teamMembers.length; i++) {

    partnerTeam = teamMembers[i];
    
    teamContainer.innerHTML += `
    
        <div class="team-card">
            <div class="card-image">
                <img src="${partnerTeam.image}" alt="${partnerTeam.name}"/>
            </div>
            <div class="card-text">
                <h3>${partnerTeam.name}</h3>
                <p>${partnerTeam.role}</p>
            </div>
        </div>
    `
}