const { sum } = require("./math");

const prompt = require("prompt-sync")()

console.log("1 for sum and 2 for subtract")

let opr = prompt()
if (opr == 1) {
    console.log("enter a");
    let a = prompt()
    console.log("enter b");
    let b = prompt()
    console.log(sum(a, b))


}