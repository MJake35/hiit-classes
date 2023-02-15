const sumNum = (a, b) => {
    return a + b
}

class Arithmetics {
    constructor(numA, numB) {
        this.firstVal = numA;
        this.secondVal = numB
    }

    multiply() {
        return this.firstVal * this.secondVal
    }

    divide() {
        let val;
        if (this.firstVal > this.secondVal) {
            val = this.firstVal / this.secondVal
        }
        else {
            val = this.secondVal / this.firstVal
        }

        return val
    }

    modulus() {
        let val;
        if (this.firstVal > this.secondVal) {
            val = this.firstVal % this.secondVal
        }
        else {
            val = this.secondVal % this.firstVal
        }

        return val
    }

    add() {
        return this.firstVal + this.secondVal
    }

    subtract() {
        let val;
        if (this.firstVal > this.secondVal) {
            val = this.firstVal - this.secondVal
        }
        else {
            val = this.secondVal - this.firstVal
        }

        return val
    }
}
const numA = prompt('Enter the your first value')
const numB = prompt('Enter the your second value')
const arithmetics = new Arithmetics(+numA, +numB)
const addition = arithmetics.add()
const subtraction = arithmetics.subtract()
const division = arithmetics.divide()
const multiplication = arithmetics.multiply()
const modulus = arithmetics.modulus()

const theSum = sumNum(+numA, +numB)

const header = document.getElementById('top')
// // header.innerText = "Welcome to your Javascript Class. Your new sum is " + theSum
header.innerText = `Welcome to your Javascript Class. Your new sum is ${theSum}`

const addText = document.createElement('p')
addText.innerText = `The addition of your inputs is ${addition}`
document.body.appendChild(addText)


const subtractText = document.createElement('p')
subtractText.innerText = `The positive difference between your inputs is ${subtraction}`
document.body.appendChild(subtractText)


const divideText = document.createElement('p')
divideText.innerText = `The none zero division of your inputs is ${division}`
document.body.appendChild(divideText)


const multiplyText = document.createElement('p')
multiplyText.innerText = `The multiplication of your inputs is ${multiplication}`
document.body.appendChild(multiplyText)


const modulusText = document.createElement('p')
modulusText.innerText = `The modulus of your inputs is ${modulus}`
document.body.appendChild(modulusText)
