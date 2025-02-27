//Question One: Write a function to calculate the sum of two numbers.

function sum(a,b) {
    return a + b
}
console.log(sum(4, 4));

//
//
//
//

//Question Two: Create a program to print “Hello, World!” and log the current date.
function intro() {
    let date = Date()
    console.log("Hello World" + '\n' + 'The Current Date is: ' + date)
}
intro()

//
//
//

//Question Three: Create a program to print numbers from 1 to 10.
for(let i = 1; i < 11; i++) {
    console.log(i)
}

//
//
//
//

//Question Four: Write a function to find the largest number in an array
let myArr = [1, 2, 44, 33, 180, 50, 39];
arrLen = myArr.length;
let num = 0;

for(let i=0; i < arrLen; i++) {
    if (myArr[i] > num) {
        num = myArr[i]
        console.log(num)
    }
}