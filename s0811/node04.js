let string = "abc";
let number = 1;
let boolean = true;
let obj = {
    outside : {
        inside : {
            key : "value"
        }
    }
};

console.log("평범한 로그 찍기,");
console.log(string,number,boolean);


let tbl = [
    {name:"이동원", birth:2004},
    {name:"rlarbxo", birth:2005},
    {name:"박인환", birth:2006}
]
console.table(tbl);

console.time("인붕");

let a = 0;
for(let i =2;i < 100;i++){
    let ii = 0;
    for(j= 2;j< i-1; j++){
        if(i % j == 0) {
            ii++;
        }
    }
    if(ii == 0) {
        a+=i;
    }
}

console.timeEnd("인붕");

function b() {
    console.trace("추척한다");
}

function a() {
    b();
}

a();

