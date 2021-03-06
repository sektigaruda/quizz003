const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays){
    if (isNaN(...arrays)) {
        return `This syntax is not allowed. The result is NaN.`;
    }
    const max = Math.max.apply(null, arrays);
    return max;
}

console.log(maxNumber(numbers));