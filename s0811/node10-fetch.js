const fetch = require('node-fetch');
const fs = require('fs').promises;
const cheerio = require('cheerio');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
let filename = "./data/corona.txt";
fetch(url)
.then(function(data) {
    return data.text();
})
.then(function(body){
    let $ = cheerio.load(body);
    let value = $(".inner_value").eq(0).text();
    console.log(value);

    let recordData = `
        전일대비 현황
        소계 : ${$(".inner_value").eq(0).text().trim()}, 국내발생 : ${$(".inner_value").eq(1).text().trim()},해외유입:${$(".inner_value").eq(2).text().trim()}
        격리해제
        누적 : ${$(".ca_value").eq(2).text().trim()}, 전일대비 : ${$(".ca_value").eq(3).text().trim()}
        격리중
        누적:${$(".ca_value").eq(4).text().trim()},전일대비 : ${$(".ca_value").eq(5).text().trim()}
        사망
        누적 : ${$(".ca_value").eq(6).text().trim()},전일대비 : ${$(".ca_value").eq(7).text().trim()}
    `
    console.log(recordData);
    return fs.writeFile(filename,recordData);
})
.then(function() {
    console.log("기록 성공");
})
.catch(function (err) {
    console.log(); 
});