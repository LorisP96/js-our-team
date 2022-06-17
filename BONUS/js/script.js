// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere 
// nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card 
// con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

const teamMembers = [];

const teamContainer = document.querySelector('.team-container');

const button = document.getElementById('addMemberButton');

button.addEventListener('click', 
    function() {

        let inputName = document.getElementById('name').value;

        let inputRole = document.getElementById('role').value;

        let inputImage = document.getElementById('image').value;

        const newCard = {name: inputName, role: inputRole, image: inputImage};

        teamMembers.push(newCard);

        console.log(newCard)

        for(let i = 0; i < teamMembers.length; i++) {

            // creo una nuova card
            partnerTeam = teamMembers[i];
            
            // inserisco nel container la card
            inputObject(partnerTeam, teamContainer);
        
        }
    }
)

// creo una funzione
function inputObject (object, container) {
        
    container.innerHTML += `

        <div class="team-card">
            <div class="card-image">
                <img src="${object.image}" alt="${object.name}"/>
            </div>
            <div class="card-text">
                <h3>${object.name}</h3>
                <p>${object.role}</p>
            </div>
        </div>
    `
}
