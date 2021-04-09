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

module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.upload = upload;
module.exports.update = update;
module.exports.remove = remove;