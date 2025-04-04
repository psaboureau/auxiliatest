const personnesArray = [{name: "John", surname: "Doe", age: "17", profession: "Dev", dob: "2000-01-01"}]

const personnesContainer = document.getElementById("personnes-container")

function renderCards (array) {
    personnesContainer.innerHTML = "";

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





// Ajouter une nouvelle card 
const cardForm = document.querySelector(".card-form")
cardForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newCard = {}
 
    newCard.name = cardForm.name.value;
    newCard.surname = cardForm.surname.value;

    // Vérification de l'âge
    const age = Number(cardForm.age.value);
    if (!age) return;
    if (age < 0 || age > 100) return

    newCard.age = age;
    newCard.profession = cardForm.profession.value;
    newCard.dob = cardForm.dob.value;

    personnesArray.push(newCard);

    renderCards(personnesArray)
})