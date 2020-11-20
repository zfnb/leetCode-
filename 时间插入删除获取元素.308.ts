class RandomizedCollection {
    private array: number[];
    constructor() {
        this.array = [];
    }

    insert(val: number): boolean {
        if (this.array.indexOf(val) !== -1) {
            // 数组包含这个值，返回false
            this.array.push(val);
            return false;
        } else {
            this.array.push(val);
            return true;
        }
    }

    remove(val: number): boolean {
        let index = this.array.indexOf(val)
        if (index !== -1) {
            this.array.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getRandom(): number {
        let indexEnd = this.array.length;
        const index = Math.floor(Math.random() * indexEnd);
        const returnNumber = this.array[index];
        return returnNumber;
    }
}
