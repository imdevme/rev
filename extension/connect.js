/* Коннект разрвается автоматически, при обновлении страницы и загрузке данного скрипта */

var socket = io.connect('http://localhost:8080');

socket.on('list', function (data) {

    if (!data) {
        throw new Error('Empty data');
    }

    updateComments(data);

    // var $listContainer = $('#quickments .b-list');
    //
    // $.each(data, function(){
    //     console.log('append');
    //     $listContainer.append('<div class="b-list-item">1</div>');
    // });

});
