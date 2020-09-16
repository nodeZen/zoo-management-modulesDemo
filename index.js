const animalModifiers = require('./services/animalModifiers')

// // A list of animals to be added to out zoo
const newAanimals = [
{species:"Chimpanzee",name:"Kojo", weight:60, gaurd:"Surabhi"},
{species:"Tiger",name:"Badshah", weight:111, gaurd:"Surya"},
{species:"Tiger",name:"Badshah", weight:111, gaurd:"Surya"},
{species:"Tiger",name:"Badshah", weight:111, gaurd:"Surya"},
{species:"Wolf",name:"Mary", weight:40, gaurd:"Chaitanya"},
{species:"Wolf",name:"Mary", weight:40, gaurd:"Chaitanya"},
{species:"Wolf",name:"Mary", weight:40, gaurd:"Chaitanya"}
]
// newAanimals.forEach(animal=>{
//     animalModifiers.addAnimal(animal);
// })

// An object o play around with
var foo ={name:"Kojo", gaurd:"Surabhi",species:"Chimpanzee", weight:60}


animalModifiers.deleteAnimal(foo);






