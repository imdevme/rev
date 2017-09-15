// При активации фоновой страницы, при открытии вкладки chrome://extensions

var socket;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    //alert('OnMessage: '+ message.type);

    if (!message && !message.type) return;

    switch (message.type) {
        case 'updateComments' :
            chrome.browserAction.setPopup({popup: 'text'});
            break;
        case 'connect':
            //openConnection();
            break;
        case 'disconnect':
            //closeConnection();
            break;
        case 'fetchComments':
            getSocket(function (socket) {
                socket.emit('fetch', {}, fetchHandler);
            });
            break;
    }
    // if (message && message.type == 'createBugTask') {
    //     var bugText = message.bugText;
    //     bgApplicationController.createTodoTask(bgUser, bugText);
    //     handler(bugText);
    // } else if(message && message.type == 'checkUserLoggedIn') {
    //     if(window.bgApplicationController.isBgUserLoggedIn()){
    //         handler("true");
    //     } else {
    //         handler("false")
    //     }
    // }
});

function fetchHandler(data) {
    fetchSuccess(data);
}

chrome.runtime.onStartup.addListener(function(){
    console.log('onStartup');
});

chrome.runtime.onConnect.addListener(function (){
    console.log('onConnect');
});

chrome.runtime.onSuspend.addListener(function (){
    console.log('onSuspend');
    closeConnection();
});



chrome.runtime.onInstalled.addListener(function (details){
    // Срабатывает после установки раширения или его обновления
});

chrome.browserAction.onClicked.addListener(function(tab) {
    // Срабатывает при клике на иконку расширения
    // Работает только если нет popup (popup.html)
});

function fetchSuccess() {
    chrome.runtime.sendMessage({type: 'fetch_comment_success'});
}

function getSocket(callback) {
    if (socket === undefined) {
        socket = io.connect('http://localhost:8080');
        socket.on('connect', function (data) {
            console.log('Connection...');
            callback(socket);
        });
    } else {
        callback(socket);
    }
}


function closeConnection() {
    socket.close();
    socket = undefined;
}
