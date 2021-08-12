let timeOutId = setTimeout(function(){
    console.log("1.5초 후에 실행됩니다.");
},1500);

let intervalId = setInterval(() => {
    console.log("0.3초 마다 인텁ㄹ");
}, 300);

setTimeout(function() {
    clearTimeout(timeOutId);
    clearInterval(intervalId);
},2000);

let im = setImmedidate(function() {
    console.log("즉시실행");
});
