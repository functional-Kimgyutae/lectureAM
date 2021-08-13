const http = require("http");
//노드에 기본적으로 내장되어 있는 http 서버를 만들기 위한 모듈


const {fetchCorona} = require("./node10-fetch");




const server = http.createServer(function(request,response) {
    response.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    // let data = `<h1>송주현이 수업을 안듣고 있어요.. 집중하게 해주세요.</h1>`;

    // response.end(data);
    fetchCorona(function(data){

        let html = `<table class="table">
            <tr class="table-light">
                <td>${data.before[0]}</td>
                <td>${data.before[1]}</td>
                <td>${data.before[2]}</td>
            </tr>
            <tr class="table-warning">
                <td>${data.out[0]}</td>
                <td>${data.out[1]}</td>
            </tr>
            <tr class="table-success">
                <td>${data.in[0]}</td>
                <td>${data.in[1]}</td>
            </tr>
            <tr class="table-danger">
                <td>${data.dead[0]}</td>
                <td>${data.dead[1]}</td>
            </tr>
        </table>`;


        response.end(JSON.stringify(html));
    }); 
});

server.listen(52000,function(){
    console.log("서버가 52000번 포트에서 구동중입니다.");
});

//이렇게 하면 http서버 객체가 생성되서 server 변수에 들어간다.