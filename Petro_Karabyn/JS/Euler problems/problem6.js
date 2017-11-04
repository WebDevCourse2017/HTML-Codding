/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and
the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */


function difference(upperBoundNumber) {
    return squareOfSum(upperBoundNumber) - sumOfSquares(upperBoundNumber);
}

function sumOfSquares(upperBoundNumber) {
    var i, sum = 1;
    for (i = 2; i <= upperBoundNumber; i++) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

function squareOfSum(upperBoundNumber) {
    return (Math.pow(upperBoundNumber, 2) * Math.pow(upperBoundNumber + 1, 2)) / 4;
}

console.log(difference(100));
//25164150