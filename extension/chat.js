(function ready() {

    var message = {
        type: 'fetchList'
    };

    chrome.runtime.sendMessage(message, function (res) {
        alert('done');
    });

})();