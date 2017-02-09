let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let Message = require('./model').Message;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.get('/messages',function (req,res) {
    Message.find({},function (err,messages) {
        res.send(messages);
    });
});
app.post('/messages',function (req,res) {
    let message = req.body;
    Message.create(message,function (err,message) {
        Message.find({},function (err,messages) {
            res.send(messages);
        })
    })
});
app.delete('/messages',function (req,res) {
    let id = req.body.id;
    Message.remove({_id:id},function () {
        Message.find({},function (err,messages) {
            res.send(messages);
        })
    })
});
app.listen(3000);