class Rectangle {
    constructor(length, breadth, height) {
        this.lenght = length
        this.breadth = breadth
        this.height = height
    }

    area() {
        return this.lenght * this.breadth
    }

    perimeter() {
        return 2 * (this.lenght + this.breadth)
    }

    volume() {
        return this.lenght * this.breadth * this.height
    }

    // async randomCalc () {
    // const area = await this.area
    //     const perimeter = await this.perimeter
    //     console.log(typeof area)
    //     return area + perimeter
    // }

    static squareSide(lenght, breadth) {
        return (lenght ** 2) + (breadth ** 2)
    }
}

const rectangleVal = new Rectangle(5, 6, 7)

console.log(rectangleVal.area())
console.log(rectangleVal.perimeter())
// console.log(rectangleVal.randomCalc())

const calArea = new Rectangle(5, 6).area()
const calPerimeter = new Rectangle(5, 6).perimeter()

console.log(calArea)
console.log(calPerimeter)

const calSquare = Rectangle.squareSide(5, 6)
console.log(calSquare)

const calcVolume = new Rectangle(7)
console.log(calcVolume.volume())