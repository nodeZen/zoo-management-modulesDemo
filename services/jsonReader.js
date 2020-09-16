// using fs core module
const fs = require('fs');

const jsonReader = (filePath) => {       
    try{        
        // Reding data from a file.
        const bufferReader = fs.readFileSync(filePath);
        // Converting the data which is in buffer form into JSON format
        const jsonData = JSON.parse(bufferReader);
        // returning the JSON data
        return jsonData;
    }catch(err){     
        // returning a null object if we have an exception in readin the file   
        return null
    }
}
module.exports = jsonReader