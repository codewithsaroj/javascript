//Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Write a for loop that prints numbers from 10 to 1.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Write a for loop that prints even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Write a for loop that calculates the sum of numbers from 1 to 100.
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(total);

//Write a for loop that generates the multiplication table for a given number, say 5.
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

//Given an array const numbers = [1, 2, 3, 4, 5], write a for loop that prints each element
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Given an array of numbers, calculate the sum of all elements using a for loop.
const age = [10, 20, 30, 40, 50];
let totalAge = 0;
for (let i = 0; i < age.length; i++) {
  totalAge += age[i];
}
console.log(totalAge);

//Given an array of numbers, count how many times a specific number occurs in the array using a for loop.
const randomNumbers = [1, 3, 4, 1, 5, 6, 6];
let obj = {};
for (let i = 0; i < randomNumbers.length; i++) {
  if (!obj[randomNumbers[i]]) {
    obj[randomNumbers[i]] = 1;
  } else {
    obj[randomNumbers[i]] = obj[randomNumbers[i]] + 1;
  }
}
console.log(obj);

//Write a for loop to calculate the factorial of a given number.
function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count > 2) {
    return "not prime";
  } else {
    return "prime";
  }
}
console.log(isPrime(25));

//Write a for loop to generate the first 10 numbers of the Fibonacci series.
let a = 0;
let b = 1;
for (let i = 2; i < 10; i++) {
  let newFebonicNumber = a + b;
  console.log(newFebonicNumber);
  a = b;
  b = newFebonicNumber;
}
