const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

class Task {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.task = null;
    }

    async add() {
        this.valid();
        if(this.errors.length > 0) return;
        try {
            this.task = await TaskModel.create(this.body);
        } catch (error) {
            console.log(error);
        }
    }

    valid() {
        this.cleanUp();
        // Validating
        // Title is between 1 and 100 characters
        // Description is less than 250 characters
        // Both fields are not empty

        if(!this.body.titulo){
            this.errors.push('O Título não pode estar vazio.');
        }

        if(this.body.titulo.length > 100){
            this.errors.push('O Título não pode ter mais de 100 caracteres.');
        }

        if(this.body.descricao.length > 250) {
            this.errors.push('A Descrição não pode ter mais de 250 caracteres.');
        }
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key]='';
            }
        }

        this.body = {
            titulo: this.body.titulo,
            descricao: this.body.descricao
        }
    }
}

module.exports = Task;