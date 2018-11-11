const fs = require('fs');

const path = process.argv[2] ? process.argv[2] : 'default.json';
const filePath = `./json's/${path}`
const clock = process.argv[3] ? process.argv[3] : 1;

let timerId = setInterval(()=>{
    let json = [];
    if (fs.existsSync(filePath)){
        json = getJSON(filePath);
    }
    writeRandNumber(filePath,json);
},clock*1000);

function getJSON(path) {
return JSON.parse(fs.readFileSync(''));
}

function writeRandNumber(path,json) {
    json.push({number:Math.random()*100});
    fs.writeFile(path,json,"utf-8",(err)=>{
        if (err) throw err;
        console.log("Writting was finished!")
    });
}