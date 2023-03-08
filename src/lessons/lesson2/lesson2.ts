console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01 - is done
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
  export  function sum(a: number) {
        return (b:number) => {
            return a+b
        }
    }
console.log(sum(6)(3))
// Task 02 - is done
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
export function makeCounter () {
      let count = 0
      return () => {
          return count += 1
    }
}

// Task 03 - is done
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
export const makeCounter2 = (value: number) => {
      let count = value
      return {
          increase: () => {
              return count + 1
          },
          decrease: () => {
              return count - 1
          },
          reset: () => {
              return count = 0
          },
          set: () => {
              return count
          }
      }

}


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

export const superMan = (func: any) => {
      let result
    return function curried(...args: any) {
        if (args.length >= func.length) {
            //@ts-ignore
            return func.apply(this, args);
        } else {

            return function(...args2: any ) {
                //@ts-ignore
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
export const sumToFor = (num: number) => {
      let result = 0
      for (let i = 0; i <= num; i++) {
          result += i
      }
      return result
}
export function sumToRec(num: number): number{
    let result = num
    if (num === 0) {
        return result
    } else {
        return result + sumToRec(num-1)
    }
}
export function findFactorial(num: number): number{
    let result = num
    if (result === 1) {
        return result
    } else {

        return result * findFactorial(num-1)
    }
}
export function fib(num: number): number{
      let result = 0
    if (num <=1 ) {
        return num
    } else {
        return  fib(num-1) + fib(num-2)
    }
}
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};