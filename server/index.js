var app = require('express')();
var serverHttp = require('http').createServer(app);
var serverHttps = require('https').createServer(app);
var io = require('socket.io')(serverHttp);

var port = 8080;

serverHttp.listen(port, function () {
    console.log('start server on port '+port);
});

// serverHttps.listen(8443, function () {
//     console.log('start server on port '+8443);
// });

app.get('/', function (req, res) {
   return res.send('Hello');
});

app.get('/list', function (req, res) {
    return res.send(getQuickments());
});

io.on('connection', function (socket) {

    console.log('New connection...');

    socket.on("disconnect", function(){
        console.log('Disconnect...');
    });

    socket.emit('list', {
        quickments : getQuickments()
    });

    socket.on('fetch', function (params, callback) {
        console.log('Fetch...');
        callback('good');
    });

});



function getQuickments() {
    var data = {
        qucikments: [
            {id: '1111111', text: 'message'}
        ]
    };
    return data;
}