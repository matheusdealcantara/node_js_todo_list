const Task = require('../models/TaskModel');

exports.addTask = (req, res, next) => {
    res.render('add');
};

exports.added = async function(req, res) {
    try {
        const task = new Task(req.body);
        await task.add();
    
        if(task.errors.length > 0){
            req.flash('errors', task.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Nova tarefa adicionada com sucesso');
        req.session.save(function(){
            return res.redirect('back');
        });

        return;
    } catch(error){
        console.log(error);
        return res.render('404');
    }
}