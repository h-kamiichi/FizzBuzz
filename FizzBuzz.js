for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 10 === 0) {
    console.log("FizzBuzz FizzBuzz");
  } else if (i % 30 === 0) {
    console.log("FizzFizz BuzzBuzz");
  } else {
    console.log(i);
  }
}
console.log("Finish");
