let node03 = require("./node03");

function checkNumber(num) {
    if(num % 2 == 0) {
        console.log(node03.even);
    }else {
        console.log(node03.odd);
    }
}

checkNumber(3);