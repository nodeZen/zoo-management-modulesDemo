const fs = require('fs');
const jsonReader = require('./jsonReader');
var allAnimals = jsonReader('./assets/animals.json');

// Fucntion to check whether valid properties are passed to out animal
const isOurAnimal = (animal) => {
    const animalProps = ["species","name","weight","gaurd"].sort();
    const props = Object.keys(animal).sort()
    if (JSON.stringify(animalProps) === JSON.stringify(props))
        return true
    else
        return false
}
// Function to check whether our animal.json file conntains valid data format
const isWrongFileData = () => {
    var wrongFileData = false
    if (allAnimals === null)
        wrongFileData = true
    return wrongFileData
}
// Function to check whether animals exists in our zoo or not
const animalsExist = () => {
    var exist = true
    if (allAnimals.length === 0)
        exist = false
    return exist
}

// Function to mofify our animals file with updated animals List
const modifyAnimalsFile = (updatedAnimalList) => {
    fs.writeFile('./assets/animals.json', JSON.stringify(updatedAnimalList), () => {
        const assignAnimals = require('./animalAssigner');
        assignAnimals();
        console.log("Animal file modified successfully")
    })
}
// Function that sorts the key-value pairs in JSON object
const sortJson = (animal) => {
    animal = JSON.stringify(animal, Object.keys(animal).sort());
    return JSON.parse(animal);
}

// Function to add an animal
const addAnimal = (animal) => {

    if (!isWrongFileData()) {

        if (isOurAnimal(animal)) {
            animal = sortJson(animal);

            allAnimals.push(animal);

            var animalsJSON = allAnimals.map(JSON.stringify);

            var uniqueAnimals = [...new Set(animalsJSON)];

            uniqueAnimals = uniqueAnimals.map(JSON.parse);

            modifyAnimalsFile(uniqueAnimals);

        } else
            console.log("Invalid animal properties")
    } else
        console.log("Please check Your animal.json file data format")
}

// Function to delete an animal
const deleteAnimal = (animal) => {
    // animal = animal.sortJson();
    if (!isWrongFileData()) {

        if (animalsExist()) {

            if (isOurAnimal(animal)) {
                animal = sortJson(animal);
                var stringAnimals = allAnimals.map(JSON.stringify);

                var myAnimal = JSON.stringify(animal);

                updatedAnimals = stringAnimals.filter(animal => {
                    return animal !== myAnimal
                })

                updatedAnimals = updatedAnimals.map(JSON.parse);

                modifyAnimalsFile(updatedAnimals)

                return updatedAnimals;
            } else
                console.log("Invalid animal properties")
        } else
            console.log("No animals in the zoo");

    } else
        console.log("Please check Your animal.json file data format")
}
// Exporting our two adding and delete functions
module.exports = { addAnimal, deleteAnimal, animalsExist }