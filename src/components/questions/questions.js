
let mkInt = (max) => Math.floor(Math.random() * Math.floor(max));

let fromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let takeRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

class Sum {

    constructor(max) {
        let operands = [mkInt(max), mkInt(max)];
        operands.sort();
        this.left = operands[1];
        this.right = operands[0];
    }

    check(answer) {
        return answer === (this.left + this.right);
    }

}

class Sequence {

    constructor(start, end, steps, take) {
        let next = fromRange(start, end);
        let step = takeRandom(steps);
        this.missing = takeRandom(0, take-1);
        this.before = [];
        this.after = [];
        this.elements = [];
        for (let i = 0; i < take; i++) {
            this.elements.push(next);
            if (i < this.missing) {
                this.before.push(next);
            }
            if (i > this.missing) {
                this.after.push(next);
            }
            next = next + step;
        }
    }

    check(answer) {
        return this.elements[this.missing] === answer;
    }

}

module.exports = {
    Sum: Sum,
    Sequence: Sequence
};
