const fetch = require('node-fetch');
const fs = require('fs').promises;
const cheerio = require('cheerio');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
const filename = "./data/data.txt";

function fetchCorona(callback){
    fetch(url)
    .then(function(data){
        return data.text();
    })
    .then(function(body){
        let $ = cheerio.load(body); //html을 읽어서 제이쿼리 형식으로 쓸 수 있게 변환해줘
        let value1 = $(".inner_value").eq(0).text().trim();
        let value2 = $(".inner_value").eq(1).text().trim();
        let value3 = $(".inner_value").eq(2).text().trim();
        
        let value4 = $(".ca_value").eq(2).text().trim();
        let value5 = $(".ca_value").eq(3).text().trim();
        let value6 = $(".ca_value").eq(4).text().trim();
        let value7 = $(".ca_value").eq(5).text().trim();
        let value8 = $(".ca_value").eq(6).text().trim();
        let value9 = $(".ca_value").eq(7).text().trim();
        let recordData = {
            before:[value1, value2, value3],
            out:[value4, value5],
            in:[value6, value7],
            dead:[value8, value9]
        }
        callback(recordData);
    })
    .catch(function(err){
        console.log(err);
        callback(err);
    });
}


module.exports = {
    fetchCorona
}