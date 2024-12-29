function DigitSum(K) {
  if (K === 0) return 0;
  return (K % 10) + DigitSum(Math.floor(Math.abs(K) / 10));
}
function sumOfThreeNumbers(a, b, c) {
  return DigitSum(a) + DigitSum(b) + DigitSum(c);
}
let n1 = 123;
let n2 = -456;
let n3 = 789;

console.log("Sonlar:", n1, n2, n3);
console.log("Raqamlar yig'indisi:", sumOfThreeNumbers(n1, n2, n3));

function Fib1(N) {
  if (N === 1 || N === 2) return 1;
  return Fib1(N - 2) + Fib1(N - 1);
}
let N = 10;
console.log(`Fibonachchi ketma-ketligining ${N}-elementi:`, Fib1(N));

function Fact(N) {
  if (N === 1) return 1;
  return N * Fact(N - 1);
}
function calculateFactorials(a, b, c) {
  return {
    factorialA: Fact(a),
    factorialB: Fact(b),
    factorialC: Fact(c),
  };
}
let num1 = 4;
let num2 = 5;
let num3 = 6;

let results = calculateFactorials(num1, num2, num3);
console.log(`Sonlar: ${num1}, ${num2}, ${num3}`);
console.log(
  `Faktoriallari: ${results.factorialA}, ${results.factorialB}, ${results.factorialC}`
);
