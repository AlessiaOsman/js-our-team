// Creo array di oggetti

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }

]

// Recupero elementi in pagina

const containerElement = document.getElementById('cards-container')

let card = '';


//Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {

    let cardName = team[i]['name']
    let cardRole = team[i]['role']
    let cardPic = team[i]['pic']

    // Creata card
    
    card += `
    <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./img/${cardPic}" class="img-fluid rounded-start">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${cardName}</h5>
              <p class="card-text">${cardRole}</p>
            </div>
          </div>
        </div>
      </div>
    
    `
    
}

containerElement.innerHTML = card



