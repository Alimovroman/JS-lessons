class Car {
    constructor(brand) {
        this.brand = brand
        this.state = {}
    }
    engine() {
        console.log(`start ${brand}`)
    }
    stop = () => {
        console.log(`stop ${brand}`)
    }

}

const car1 = new Car('bmw')
const car2 = new Car('opel')

console.log(car1.engine === car2.engine)
console.log(car1.stop === car2.stop)
