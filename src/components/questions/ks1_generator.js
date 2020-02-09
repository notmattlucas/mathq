const questions = require('./questions'),
      SumQ = require('./SumQ').default;

class Question {

    constructor(id, logic, view) {
        this.id = id;
        this.logic = logic;
        this.view = view;
    }

}

module.exports = {
    generate: function(size) {
        let qs = [];
        for (let i = 0; i < size; i++) {
            qs.push(new Question(i + 1, new questions.Sum(100), SumQ));
        }
        return qs;
    }
};