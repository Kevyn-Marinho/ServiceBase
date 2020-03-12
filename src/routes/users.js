exports.get = async function(req, res) {
    try {
        const id = req.param.id;
        res.send("User tem que listar");
    } catch (e) {
        return res.failure(e);
    }
} 