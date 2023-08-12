const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

class Task {
    constructor(body) {
        this.body = body;
    }
}

module.exports = Task;