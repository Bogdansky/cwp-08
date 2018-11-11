const fs = require('fs');

const path = process.argv[2] ? process.argv[2] : 'default.json';
const clock = process.argv[3] ? process.argv[3] : 1;


const filePath = `json's/${path}`;

let timerId = setInterval(()=>{
    let json = {};
    if (fs.existsSync(filePath)){
        json = getJSON(filePath);
    }
    writeRandNumber(filePath,json);
},clock*1000);

function getJSON(path) {
    return fs.statSync(path).size === 0 ? {} : JSON.parse(fs.readFileSync(path));
}

function writeRandNumber(path,json) {
    json.numbers = json.numbers || [];
    json.numbers.push({number:Math.round(Math.random()*100)});
    fs.writeFile(path,JSON.stringify(json),"utf-8",(err)=>{
        if (err) throw err;
        console.log("Writting was finished!")
    });
}