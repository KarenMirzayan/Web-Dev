// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

function checkSpam(str) {
    let a = str.toLowerCase();
    return a.includes('viagra') || a.includes('xxx');
}