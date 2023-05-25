//import-browser module
import { getHeroes } from "./database.js"

//invoke the getHeroes function
const heroes = getHeroes()
//a copy stored in the heroes variable

export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}