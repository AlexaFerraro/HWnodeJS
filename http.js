
function HttpFunc(http) {
    this.http = http.createServer(function(request, response) {
        response.end('Hello NodeJS');
    }).listen(3000, "127.0.0.1", function() {
        console.log('Сервер начал прослушивание запросов на порту 3000');
    });
}


module.exports = HttpFunc;