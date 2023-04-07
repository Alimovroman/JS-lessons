// function CarCreator() {
//     this.brand = brand
// }
// const car1 = new CarCreator('bmw')
// const car2 = new CarCreator('opel')

class Car {
    #weels
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed= maxSpeed
        this.#weels = 4
    }
    showMaxSpeed() {
        console.log(`${this.brand} has max speed: ${this.maxSpeed}`)
    }
    static showWeelsMeels() { // статические методы есть только у класса
        console.log(this.#weels)
    }

    get showWeels() {
        return this.#weels
    }
}

const car1 = new Car('bmw', 200)
const car2 = new Car('opel', 110)

// car1.showMaxSpeed()
// car2.showMaxSpeed()
// console.log(car1.showWeels)
class SuperCar extends Car { // с помощью экстенд мы расширяем новый класс
    constructor(brand, maxSpeed, brandSlogan) {
        super(brand, maxSpeed);
        this.brandSlogan = brandSlogan

    }
}

const superCar1 = new SuperCar('audi', 200, 'asdadad' )
console.log(superCar1.brandSlogan)