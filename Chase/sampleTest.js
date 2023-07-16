function fizzBuzz (n) {
    for (let i = 1; i <= n; i++) {
        const element = i;

        if (element % 3 === 0 && element % 5 === 0) {
            console.log("FizzBuzz")
        } else if (element % 3 === 0 && element % 5 !== 0) {
            console.log("Fizz")
        } else if (element % 3 !== 0 && element % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(element)
        }
    }
}

console.log(fizzBuzz(15))