import { checkPrime } from "./math.js";

const numbers = [1, 2, 3, 4, 5, 10, 13, 17];

numbers.forEach((num) => {
console.log(`${num} is prime:`, checkPrime(num));
});