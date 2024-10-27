class Intersection {
    array1;
    array2;
    constructor(array1, array2) {
        this.array1 = array1
        this.array2 = array2
    }

    getQuadratic() {
        return this.array1.filter(element1 => this.array2.some(element2 => element1 == element2))
    }

    getLinear() {
        const intersection = [];
        const hashTable = {}
        for (let i = 0; i < this.array1.length; i++) {
            Object.defineProperty(hashTable, this.array1[i], {
                value: this.array1[i]
            })
        }

        for (let i = 0; i < this.array2.length; i++) {
            if (Object.hasOwn(hashTable, this.array2[i])) {
                intersection.push(this.array2[i])
            }
        }

        return intersection
    }
}

var firstArray = [1,2,6,5,3,4,7,9,8]
var secondArray = [3,7,8,10,11,13,14,15,17]


intersection = new Intersection(firstArray, secondArray)

console.log(intersection.getQuadratic())
console.log(intersection.getLinear())