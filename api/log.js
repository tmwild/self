const fs = require('fs')

const getLogs = () => {
    let rawdata = fs.readFileSync('../data/logs.json');  
    let logs = JSON.parse(rawdata);
    return logs
}

export {getLogs}