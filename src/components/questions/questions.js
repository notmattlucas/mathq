
let mkInt = (max) => Math.floor(Math.random() * Math.floor(max));

class Sum {

    constructor(max) {
        let operands = [mkInt(max), mkInt(max)];
        operands.sort();
        this.left = operands[0];
        this.right = operands[1];
    }

    check(answer) {
        return answer === (this.left + this.right);
    }

}

module.exports = {
    Sum: Sum
};
