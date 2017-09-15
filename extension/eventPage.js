
// var socket = io.connect('http://localhost:8080');
//
// socket.on('list', function (data) {
//
//     if (!data) {
//         throw new Error('Empty data');
//     }
//
//     var $listContainer = $('#quickments .b-list');
//
//     $.each(data, function(){
//         console.log('append');
//         $listContainer.append('<div class="b-list-item">1</div>');
//     });
//
// });
//
// $('#quickments').append('<p>text</p>');

chrome.runtime.onMessage.addListener(function(message, sender, handler) {
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

(function onLoad() {
    // Выполнится один раз при открытии? или при установки ?
})();

chrome.browserAction.getPopup(details, function (result) {

});

chrome.runtime.onInstalled.addListener(function (details){
    // Срабатывает после установки раширения или его обновления
});

chrome.browserAction.onClicked.addListener(function(tab) {
    // Срабатывает при клике на иконку расширения
    // Работает только если нет popup (popup.html)
});

