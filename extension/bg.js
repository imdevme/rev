;(function (){
    console.log('Start scritpt bg.js chrome extension!');
    $.get('https://httpbin.org/get', function(){
        console.log('Response');
    });
})();