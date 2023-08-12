exports.addTask = (req, res, next) => {
    res.render('add');
};

exports.added = (req, res) => {
    res.send(req.body);
}