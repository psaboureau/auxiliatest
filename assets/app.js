console.log("hello world");

const personnesArray = [{name: "John", surname: "Doe", age: "17", profession: "Dev", dob: "01/01/2000"}]

// TODO Afficher les personnes existantes sous formes de cartes dans la Section 1
const personnesContainer = document.getElementById("personnes-container")

function renderCards (array) {
    array.forEach((card) =>{
        createCard(card);
    })  
}

function createCard(card) {
    const {name, surname, age, profession, dob } = card;

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card")

    const h2 = document.createElement("h2");
    h2.innerText = name + " " + surname;
    cardContainer.appendChild(h2);

    const professionH3 = document.createElement("h3");
    professionH3.innerText = `Profession: ${profession}`
    cardContainer.appendChild(professionH3);

    const ageH4 = document.createElement("h4");
    ageH4.innerText = `Age: ${age}`;
    cardContainer.appendChild(ageH4)

    const dobH4 = document.createElement("h4");
    dobH4.innerText = `Date Of Birth: ${dob}`
    cardContainer.appendChild(dobH4)

    
    personnesContainer.appendChild(cardContainer);
}


renderCards(personnesArray)
// TODO Valider les données du formulaires dans la Section 2

// TODO Ajouter une nouvelle personne au tableau et actualiser l'affichage