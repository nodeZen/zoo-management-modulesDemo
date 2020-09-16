const fs = require('fs');
const jsonReader = require('./jsonReader');
const gaurdsJSON = jsonReader('./assets/gaurds.json');

const animalAssigner = () => {
    if(gaurdsJSON!==null){
        const animalsJSON = jsonReader('./assets/animals.json');
        gaurdsJSON.forEach(gaurd => {
            var animals = animalsJSON.filter(animal => {
                return gaurd.name === animal.gaurd
            })
            gaurd.animals = []
            gaurd.animals = animals
        });
        fs.writeFileSync('./assets/gaurds.json', JSON.stringify(gaurdsJSON))
    }   
    else
        console.log("Please check Your gaurds.json file data format")   
}
module.exports = animalAssigner