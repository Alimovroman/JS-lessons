

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01 - is done
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// const promise1 = new Promise((res, rej) => {
//     console.log("Promise is created")
// })


// Task 02 - is done
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const promise1 = Promise.resolve(console.log('Promise Data'))


// Task 03 - is done
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// const promise = Promise.reject(console.log('Promise Error'))


// Task 04 - is done
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res()
//         console.log('Promise Data')
//     }, 3000)
// })


// Task 05 - is done
// Создайте литерал объекта handlePromise со следующими свойствами: - is done
// promise, resolve, reject, onSuccess, onError  - is done
// Проинициализируйте первые три свойства null, - is done
// а последние два функциями, которые принимают один параметр и выводят - is done
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}` - is done
// вторая - `Promise is rejected with error: ${paramName}` - is done
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise". - is done
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис, - is done
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// type HandlePromiseType = {
//     promise: null | Promise<string>
//     resolve:   void | null
//     reject: void | null
//     onSuccess: (paramName: string) => void
//     onError: (paramName: string) => void
// }
//
// let handlePromise: HandlePromiseType = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: function (paramName: string) {
//         console.log(`Promise is resolved with data: ${paramName}`)
//     },
//     onError: function (paramName: string) {
//         console.log(`Promise is rejected with error: ${paramName}`)
//     }
// }
//
// export const createPromise = () => {
//     handlePromise.promise = new Promise((res, rej) => {
//         handlePromise.resolve = res()
//         handlePromise.reject = rej()
//     })
// }
// export const resolvePromise = () => {
//     handlePromise.resolve
// }
// export const rejectPromise = (paramName: string) => {
//     handlePromise.reject
// }


// Task 06 - is done
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("My name is")
//     }, 1000)
// })
//     .then((response) => {
//     return onSucces('Roman')
// })
//     .then((response) => {
//         print(response)
//     })
// function onSucces (nameParam: string): string {
//     return `My name is ${nameParam}`
// }
// function print (param: string) {
//     console.log(param)
// }

// Task 7 - is done
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res({ name: "Anna" })
    }, 2000)
} )
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res({age: 16})
    }, 3000)
} )
const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res({city: 'Ryazan'})
    }, 4000)
} )

const promiseAll = Promise.all([promise1, promise2, promise3])
    .then(response => {
        // console.log(response[0].name, response[1].age, response[2].city)
        console.log(response)
    })

// just a plug
export default () => {
};