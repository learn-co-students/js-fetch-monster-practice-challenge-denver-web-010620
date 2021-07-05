const monsters_url = "http://localhost:3000/monsters/"

const createMonster = document.querySelector('#create-monster')
const monsterContainer = document.querySelector('#monster-container')
console.log(monsterContainer)
fetch(monsters_url)
.then(response => response.json())
.then(monsterArray => {
    monsterArray.map(monsterObject => {
        console.log(monsterObject)
        let monsterName = document.createElement("h1")
        let monsterAge = document.createElement("h1")
        let monsterDescription = document.createElement("h1")
        monsterName.textContent = monsterObject.name
        monsterAge.textContent = monsterObject.age
        monsterDescription.textContent = monsterObject.description
        monsterContainer.append(monsterName, monsterAge, monsterDescription)
    })

})