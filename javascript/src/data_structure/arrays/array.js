class ArrayImplementation {
    constructor(initialArray = []) {
        this._value = initialArray;
    }

    access(index) {
        if (index >= 0 && index <= this._value.length) {
            return this._value[index]
        }

        return null
    }
}