const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String
});
const Message = mongoose.model('Message', messageSchema);

function getAll(req, res){
    res.json({
        "status" : "succes", 
        "message" : "GETTING MESSAGES"
    });
}

function getOne(req, res){
    let id = req.params.id;
    res.json({
        "status" : "succes", 
        "message" : `GETTING MESSAGE with ID ${id}`
    });
}

function upload(req, res){
    
    
    res.json({
        "status" : "succes", 
        "message": "POSTING new message from user Pikachu"
    })
}

function update(req, res){
    let id = req.params.id;
    res.json({
        "status" : "succes",
        "message": `UPDATING a message with ID ${id}`
    })
}

function remove(req, res){
    let id = req.params.id;
    res.json({
        "status" : "succes",
        "message": `DELETING a message with ID ${id}`
    })
}

function getUser(req, res){
    let username = req.params.username;
    res.json({
        "status" : "succes",
        "message": `GETTING message for username ${username}`
    })
}

module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.upload = upload;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getUser = getUser;