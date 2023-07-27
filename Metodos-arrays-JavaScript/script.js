

const data = [
    { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
    { name: "Franco", age: 36, salary: 5000, active: true, team: "Frontend", bonus: 0 },
    { name: "Hilary", age: 32, salary: 2000, active: false, team: "Frontend", bonus: 0 },
    { name: "Bozo", age: 28, salary: 1000, active: true, team: "Mobile", bonus: 0 },
    { name: "Rabbath", age: 23, salary: 14000, active: false, team: "Backend", bonus: 0 },
]

//***** Find *************** 
//ele percorre de cima pra  baixo
//e devolve o primeiro item q ele encontrar 
//👉 Franco

// const user = data.find(user => {
//     return user.age >= 25
// })

// console.log(user)


//***/ Filter ***************
//pega todos item com base nas condiçoes passadas 

// const user = data.filter(user => {
//     return user.salary >= 4000 && user.active
// })

// console.log(user)


//***/ findIndex ***********
// falar em q posição dentro do array ele esta.
// 👉 posição 1

// const indexUser = data.findIndex(user => {
//     return user.name === 'Franco'
// })

// console.log(indexUser)

//se quiser mudar um dado especifico

//console.log(data[indexUser].active = false)
//console.log(data); 


// Map 
// const users = data.map((user, id) => {
// devolve os objetos dentro do array

//     if(user.salary <= 4000) {
//         user.salary += 70
//         user.bonus += 1
//     }

//     return {
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })

// console.log(users)

//REVERTER A ORDEM
//console.log(data.reverse())

//**** Some
//se existir pelo menos 1 ele devolve um boleano
// no exemplo abaixo ele retorna true

// const userInactive = data.some(user => {
//     return user.active === false;
// })

// console.log(userInactive)


// Every 
//ele ver se TODOS os itens tem o valor "true"
//nesse caso retorna 👉false, pq nem tem o active como true

// const userActive = data.every((user) => {
//     return user.active === true
// })

// console.log(userActive)


// Reduce 

//  const users = data.reduce((total, user) => {
//     return total += user.salary
//  }, 0)

//  console.log(users)



const numbers = [2, 3, 4, 5, 6, 7, 9]

