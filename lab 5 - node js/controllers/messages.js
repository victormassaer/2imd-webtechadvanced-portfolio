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

module.exports.getOne = getOne;
module.exports.getAll = getAll;