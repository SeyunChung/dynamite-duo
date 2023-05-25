// Import the function references that generate the HTML lists
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`

/*
    This is the code you wrote in the last chapter to get a
    reference to the <main> element
*/
const theExistingMainElement = document.querySelector("#container")


theExistingMainElement.innerHTML = theWholeEnchilada