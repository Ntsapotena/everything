
function sum(n) {
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log("sum(5) →", sum(5));
console.log("sum('abc') →", sum('abc'));
console.log("sum(5.3) →", sum(5.3));

function factorial(n) {
  if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
    return "Please enter a valid positive integer";
  }

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log("factorial(4) →", factorial(4));
console.log("factorial(0) →", factorial(0));
console.log("factorial(-3) →", factorial(-3));

function funkyMath(...args) {
  if (args.length === 2) {

    return args[1] - args[0];
  } else if (args.length === 3) {

    return args[0] + args[1] + args[2];
  } else if (args.length === 4) {

    let part1 = args[0] + args[1];
    let part2 = args[2] + args[3];
    return part1 / part2;
  } else {
    return "Invalid number of arguments";
  }
}

console.log("funkyMath(5, 10) →", funkyMath(5, 10));
console.log("funkyMath(1, 2, 3) →", funkyMath(1, 2, 3));
console.log("funkyMath(8, 2, 3, 5) →", funkyMath(8, 2, 3, 5));
console.log("funkyMath(1) →", funkyMath(1));

let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

oddNumbers.sort(function(a, b) {
  return a - b;
});

console.log("Original Array:", numbers);
console.log("Odd Numbers (sorted):", oddNumbers);

let me = {
  firstName: "Ntsapo",
  lastName: "Tena",
  age: 25,
  favouriteColour: "Blue",
  dreamCar: "BMW"
};

me.favouriteFood = "Pizza";

delete me.age;

console.log("Me Object:", me);
