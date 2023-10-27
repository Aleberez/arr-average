const calculateAverage = (arrOfNumbers) => {
    let sum = 0;
    for (let i = 0; i < arrOfNumbers.length; i += 1) {
        sum += arrOfNumbers[i];
    }
    return sum / arrOfNumbers.length;
};

console.log(calculateAverage([10, 10])); // 10
console.log(calculateAverage([15, 35])); // 25

