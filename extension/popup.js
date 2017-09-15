// данный скрипт будет вызываться каждый раз при клике на кнопку в панели

console.log('Open popup...');

window.onload = function () {

    chrome.runtime.onMessage.addListener(function(message, sender, handler) {
        switch (message.type) {
            case 'fetch_comment_success':
                $('#quickments').html('');
                break;
        }
    });

    chrome.runtime.sendMessage({type:'fetchComments'});

};