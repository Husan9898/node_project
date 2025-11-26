const fs = require('fs').promises;
const filePath = require('./database.json');

async function readData(){
    try {
        let data = await fs.readFile(filePath, "utf");
        return JSON.parse(data);

        
    } catch (error) {
        console.error(error);
        
    }

}



async function writeData(data){
    try {
        let data = await fs.writeFile(data, null, 2);
        return JSON.parse(data);

        
    } catch (error) {
        console.error(error);
        
    }

}






module.exports = {

};