const Users = require("../collections/UserCollection");

const userController = new Object();

userController.get = async function (req, res) {
    try {
        Users.find({}).lean().exec(
           function (e, docs) {
              res.status(200).send({ "users": docs });
           });

    } catch (e) {
        return res.failure(e);
    }
}

userController.getById = async function (req, res) {
    try {
        const id = req.params.id;
        Users.find({_id: id}).lean().exec(
            function (e, doc) {
                if(doc)
                    return res.status(200).send(doc[0]);
                else 
                    return res.status(404).send();
            });
    } catch (e) {
        return res.failure(e);
    }
}

userController.post = async (req, res) => {
    try {
        if(!req.body || !req.body.email || !req.body.username)
            return res.status(412).send("Inconplete parameters");

        var user = new Users(req.body);
        
        user.save((err) => {
            if(err)    
                return res.failure(err);
            else 
                return res.status(201).send();
        });
    } catch (e) {
        return res.failure(e);
    }
}

module.exports = userController;
