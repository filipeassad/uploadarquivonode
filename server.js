var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    //res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, X-Requested-With");
    next();
});

var server = app.listen(port, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Aplicação está on nesse endereço http://%s:%s", host, port)
});

require('./upload-arquivo/rota')(app);