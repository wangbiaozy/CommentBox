import $ from 'jquery';
module.exports = {
    list(callback){
        $.get('http://localhost:3000/messages').then(function (messages) {
            callback(messages);
        });
    },
    add(message,callback){
        $.post('http://localhost:3000/messages',message).then(function (messages) {
            callback(messages);
        })
    },
    del(id,callback){
        $.ajax({
            url:'http://localhost:3000/messages',
            method:'DELETE',
            data:{id}
        }).then(function (messages) {
            callback(messages)
        })
    }
};
