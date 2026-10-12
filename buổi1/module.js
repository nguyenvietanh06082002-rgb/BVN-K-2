//bài 10:
export function lengthOfString(str) {
    return str.length;
}
//bài 18:
export function formDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}
//bài 20:
export const contantChu = (str, char) => str.includes(char)
//bài 25:
export function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // result = result * i
    }
    return result;
}