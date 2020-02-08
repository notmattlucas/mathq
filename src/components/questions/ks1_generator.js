const questions = require('./questions');

class Question {

    constructor(id, logic) {
        this.id = id;
        this.logic = logic;
    }

}

module.exports = {
    generate: function(size) {
        let qs = [];
        for (let i = 0; i < size; i++) {
            qs.push(new Question(i + 1, new questions.Sum(100)));
        }
        return qs;
    }
};