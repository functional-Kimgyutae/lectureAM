const fs = require('fs').promises;

let filename = "./data/readme.txt";

fs.readFile(filename)
.then(function(data){
    console.log(data.toString());
}).catch(function(err){
    console.log(err);
});