function checkAge1(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Did parents allow you?');
}