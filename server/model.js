let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/messages');
let MessageSchema = new mongoose.Schema({
    name:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
exports.Message = mongoose.model('Message',MessageSchema);