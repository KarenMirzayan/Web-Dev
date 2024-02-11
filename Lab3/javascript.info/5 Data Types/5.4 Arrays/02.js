// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
    let numbers = [];
    let sum = 0;

    while (true) {
        let value = prompt('Enter a number:', 0);

        if (value === '' || value === null || !isFinite(value)) {
            break;
        }

        numbers.push(+value);
    }

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}