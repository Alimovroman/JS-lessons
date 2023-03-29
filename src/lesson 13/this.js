// console.log(this)


// const a = () => {
//     console.log(this)
// }
// a()

// user = {
//     name: 'vasya',
//      showName: () => {  // Стрелочная функция берет this на момент создания
//         console.log(this.name)
//     },
//     showNameCore() { // обычная функция берет контекст на момент вызова, то есть от туда что слева от showNameCore у user
//         console.log(this.name)
//     }
// }
// user.showName()
// user.showNameCore()

// лексическое окружение бывает глобальным или функциональным, у обЪектов нет своего окружения
// let color = 'blue'
// const car = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
//
// car.showColor()
//
// let presentColor = car.showColor
// presentColor()


// const car1 = {
//     maxSpeed: 200,
//
// }
// const car2 = {
//     maxSpeed: 300,
//
// }
// function showMaxSpeed() {
//     console.log(this.maxSpeed)
// }
// car1.s = showMaxSpeed
// car2.s = showMaxSpeed
//
// car1.s()
// car2.s()

// const scooter = {
//     maxSpeed: 60
// }
// const car1 = {
//     maxSpeed: 200,
//     showMaxSpeed(a=5, b=6) {
//         (() => {
//             console.log(this.maxSpeed)
//         }).call(scooter)
//         // console.log(a,b)
//         // console.log(this.maxSpeed)
//     }
// }
// const car2 = {
//     maxSpeed: 300,
// }
//
// car1.showMaxSpeed()
// car1.showMaxSpeed.call(car2, 1, 2)
// car1.showMaxSpeed.apply(car2, [3,4])
// const ferrari = car1.showMaxSpeed.bind(car2)
// ferrari()

class Dealer {
    state = {
        models: ['Yaris', 'Corolla', 'Prado']
    }
    showModels() {
        this.setState()
    }
    render() {
        return <List getModels={this.showModels.bind(this)}/>
        // или
        return <List getModels={() => this.showModels}/>
    }
}
class List {
    //{getModels}
}