var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = 8080;

server.listen(port, function () {
    console.log('start server on port '+port);
});

app.get('/', function (req, res) {
   return res.send('Hello');
});

app.get('/list', function (req, res) {
    return res.send(getQuickments());
});

io.on('connection', function (socket) {
    socket.emit('list', {
        quickments : getQuickments()
    })
});

function getQuickments() {
    var data = {
        qucikments: [
            {id: '1111111', text: 'message'}
        ]
    };
    return data;
}