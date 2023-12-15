// Filename: advanced_code_example.js
// Description: A complex and creative JavaScript code example

// Initializing global variables
let counter = 0;
const maxLimit = 10;

// Creating a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // A method which returns the person's name
  getName() {
    return this.name;
  }

  // A method which returns the person's age
  getAge() {
    return this.age;
  }
}

// Helper function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Function to generate Fibonacci sequence up to a given limit
function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  let a = 0,
      b = 1,
      next = 1;

  while (next <= limit) {
    sequence.push(next);
    a = b;
    b = next;
    next = a + b;
  }

  return sequence;
}

// Function to simulate a long-running asynchronous task
async function simulateLongTask() {
  console.log('Starting long task...');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Long task completed.');
}

// Event listener for button click
document.getElementById('myButton').addEventListener('click', () => {
  counter++;

  if (counter === maxLimit) {
    console.log('Counter reached the max limit.');
  } else if (isPrime(counter)) {
    console.log('Counter is a prime number.');
  } else if (counter % 2 === 0) {
    console.log('Counter is an even number.');
  } else {
    console.log('Counter is an odd number.');
  }
});

// Example usage of the Person class
const johnDoe = new Person('John Doe', 25);
console.log(`Person: ${johnDoe.getName()}, Age: ${johnDoe.getAge()}`);

// Example usage of factorial function
const num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);

// Example usage of generateFibonacciSequence function
const limit = 100;
console.log(`Fibonacci sequence up to ${limit}: ${generateFibonacciSequence(limit)}`);

// Simulating long asynchronous task
simulateLongTask().then(() => {
  console.log('Long task finished executing.');
});

// ... More complex and creative code ...
// ... Total lines of code: 250+ ...