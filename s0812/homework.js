console.time("인붕");

for(let i =2;i < 100;i++){
    let ii = 0;
    for(j= 2;j< i-1; j++){
        if(i % j == 0) {
            ii++;
        }
    }
    if(ii == 0) {
        console.log(i);
    }
}

console.timeEnd("인붕");