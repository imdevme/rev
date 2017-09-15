alert('load eventPage'); // При активации фоновой страницы, при открытии вкладки chrome://extensions

var socket = io.connect('http://localhost:8080');

socket.on('list', function (data) {

    // var $listContainer = $('#quickments .b-list');
    //
    // $.each(data, function(){
    //     console.log('append');
    //     $listContainer.append('<div class="b-list-item">1</div>');
    // });

});

chrome.runtime.onMessage.addListener(function(message, sender, handler) {

    if (!message && !message.type) return;

    switch (message.type) {
        case 'updateComments' :
            chrome.browserAction.setPopup({popup: 'text'});
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


chrome.runtime.onStartup.addListener(function(){
    alert('onStartup');
});

chrome.runtime.onConnect.addListener(function (){
    alert('onConnect');
});

chrome.runtime.onSuspend.addListener(function (){
    alert('onSuspend'); // Отправляется перед выгрузкой eventPage.js
});



chrome.runtime.onInstalled.addListener(function (details){
    // Срабатывает после установки раширения или его обновления
});

chrome.browserAction.onClicked.addListener(function(tab) {
    // Срабатывает при клике на иконку расширения
    // Работает только если нет popup (popup.html)
});

