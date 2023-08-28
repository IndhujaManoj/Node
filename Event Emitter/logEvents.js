const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const logEvents = async (message) => {
    const datetime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`;
    const logItem = `${datetime}\t${uuid()}\t${message}\n`;  // Corrected the use of uuid()
    console.log(logItem);
    
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventFile.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
};

module.exports = logEvents;
