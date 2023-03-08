import {fib, findFactorial, makeCounter, makeCounter2, sum, sumToFor, sumToRec, superMan} from "./lesson2";

test('should be function sum ()()', () => {
    const result = sum(3)(6)
    expect(result).toBe(9)
})
test('should be counter + 1', () => {
    const counter = makeCounter()
    counter()
    counter()
    let result = counter()
    expect(result).toBe(3)
})
test('should be counter inc or dec', () => {
    const counter = makeCounter2(5)

    expect(counter.increase()).toBe(6)
    expect(counter.reset()).toBe(0)
    expect(counter.decrease()).toBe(-1)
})
test('should be sum all arguments', () => {
    function sum(a: number, b: number, c: number) {
        return a + b + c;
    }
    let result = superMan(sum)

    let result2 = superMan(3)(2)(5)(3)
    expect(result(0,)(0,0)).toBe(0)


    // expect(result).toBe(13)
})
test('sum num with FOR and Recurs', () => {
    const result = sumToFor(4)
    const result2 = sumToRec(4)

    expect(result).toBe(10)
    expect(result2).toBe(10)
})
test('find factorial', () => {
    const result = findFactorial(5)
    expect(result).toBe(120)
})
test('find fib', () => {
    const result = fib(7)
    expect(result).toBe(13)
})