function DeleteUserAction(userId, name) { // Функция конструктор
    this.type = 'RERSASs=WDSa'
    this.payload = {
        userId,
    }
    this.name = name
}

DeleteUserAction.prototype.hello = function () { // Присобачиваем методы к конструкторы
    console.log(this.name)
}

const action1 = new DeleteUserAction(2312)
const action2 = new DeleteUserAction(2312332)
console.log(action1)
console.log(action2)

class User { // Класс  этот пример про Инкапсуляцию
    #name = '' // #привытность, напрямую не вызовем
    constructor(name, userId) {
        this.#name = name
        this.type = 'RERSASs=WDSa'
        this.payload = {
            userId
        }
    }
    get name () {  // При вызове методов get и set обращаемся просто как к свойствам типа User.name = 'игорь'
        return this.#name
    }
    set name (value) {
        this.#name = value
    }
    hello () { // так методы присобачиваются в классе
        console.log(this.name)
    }
}

class Coder extends User { // Coder расширяет возможости User  Этот пример про наследование
    constructor(name, userId, tech) {
        super(name, userId); // с помощью супер вызываем Userский констркутор
        this.tech = tech
    }
    hello() {
        super.hello()
        console.log('yoyoyoyoyo')
    }
    code() {
        console.log(`im ${this.name}`)
    }
}

const coder1 = new Coder('Roma', 15151, 'react')