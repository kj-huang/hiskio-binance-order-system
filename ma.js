export class MA {
    closes = [];
    ma_history = [];

    constructor(number) {
        this.number = number;
    }

    feed(d) {
        this.closes.push(d.close);
        let sum = 0;
        for (let i = this.closes.length - 1; i >= this.closes.length - this.number; i--) {
            sum += this.closes[i];
        }

        this.ma_history.push(sum / this.number);
    }

    v_latest() {
        return Math.round((this.ma_history[this.ma_history.length - 1] + Number.EPSILON)*100) / 100;
    }

    isHigher(value) {
        return this.v_latest() < value ;
    }

    isLower(value) {
        return this.v_latest() > value ;
    }
}
