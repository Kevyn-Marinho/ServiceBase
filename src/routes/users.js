exports.get = async function(req, res) {
    try {
        const id = req.param.id;
        res.send("User " + id);
    } catch (e) {
        return res.failure(e);
    }
} 