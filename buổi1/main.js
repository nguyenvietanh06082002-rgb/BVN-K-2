import { contantChu, factorial, formDate, lengthOfString } from "./module.js";

//bài 1:
const productInfo = (product, price) => {
    return `Sản phẩm: ${product}, Giá: ${price.toLocaleString("vi-VN")} VNĐ`;
}
console.log(productInfo("Sách", 20000));

//bài 2:
const greet = (name) => {
    return `Xin chào, ${name}!`;
}
console.log(greet("An"));

//bài 3:
const sumUpTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(5));

//bài 4:
const square = (number) => number ** 2;
console.log(square(6));

//bài 5:
const isEven = (number) => number % 2 === 0;
console.log(isEven(7));

//bài 6:
const firstElement = (array) => array[0];
console.log(firstElement([1, 2, 3]));

//bài 7:
function sum(...args) {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total;
}
console.log(sum(1, 2, 3, 4));

//bài 10:
console.log(lengthOfString("Hello World"));
//
const stringLength = (text) => text.length;
console.log(stringLength("Hello World"));

//bài 11:
const toUpperCase = (text) => text.toUpperCase();
console.log(toUpperCase("javascript"));

//bài 12:
const formatCurrency = (amount) => {
    return `${amount.toLocaleString("en-US")} VNĐ`;
}
console.log(formatCurrency(1000000));

//bài 13:
const max = (numbers) => Math.max(...numbers);
console.log(max([10, 5, 20, 8]));

//bài 14:
const isPrime = (number) => {
    if (!Number.isInteger(number) || number < 2) return false;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

//bài 15:
const repeatString = (text, count) => Array(count).fill(text).join(" ");
console.log(repeatString("Hello", 3));

//bài 16:
const sumOdd = (numbers) => {
    return numbers.filter((number) => number % 2 !== 0)
        .reduce((total, number) => total + number, 0);
}
console.log(sumOdd([1, 2, 3, 4]));

//bài 17:
const sumGreaterThan = (numbers, threshold) => {
    return numbers.filter((number) => number > threshold)
        .reduce((total, number) => total + number, 0);
}
console.log(sumGreaterThan([1, 2, 3, 4], 2));

//bài 18:
console.log(formDate("2024-11-28"));

//bài 19:
const firstThree = (array) => array.slice(0, 3);
console.log(firstThree([1, 2, 3, 4, 5]));

//bài 20:
console.log(contantChu("javascript", "j"));

//bài 21:
const mergeArrays = (firstArray, secondArray) => [...firstArray, ...secondArray];
console.log(mergeArrays([1, 2], [3, 4]));

//bài 22:
const countOccurrences = (array, value) =>
    array.filter((element) => element === value).length;
console.log(countOccurrences([1, 2, 2, 3, 2], 2));

//bài 23:
const filterOdd = (numbers) => numbers.filter((number) => number % 2 !== 0);
console.log(filterOdd([1, 2, 3, 4]));

//bài 24:
const greaterThan = (numbers, threshold) =>
    numbers.filter((number) => number > threshold);
console.log(greaterThan([1, 2, 3, 4], 2));

//bài 25:
console.log(factorial(5));

//bài 26:
const separateEvenOdd = (numbers) => ({
    even: numbers.filter((number) => number % 2 === 0),
    odd: numbers.filter((number) => number % 2 !== 0),
});
console.log(separateEvenOdd([1, 2, 3, 4]));

//bài 27:
const sortAsc = (numbers) => [...numbers].sort((a, b) => a - b);
console.log(sortAsc([3, 1, 4, 2]));

//bài 28:
const sumEvenIndex = (numbers) => {
    return numbers.reduce((total, number, index) => index % 2 === 0 ? total + number : total, 0);
}
console.log(sumEvenIndex([1, 2, 3, 4]));

//bài 29:
const multiplyByTwo = (numbers) => numbers.map((number) => number * 2);
console.log(multiplyByTwo([1, 2, 3]));

//bài 30:
const arrayToString = (strings) => strings.join("");
console.log(arrayToString(["a", "b", "c"]));
