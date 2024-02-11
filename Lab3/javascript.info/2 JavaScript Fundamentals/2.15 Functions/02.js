function myMin(a, b) {
    return (a < b) ? a : b;
}

function myPow(a, b) {
    let res = 1;
    for (let i = 0; i < b; i++) {
        res *= a;
    }
    return res;
}