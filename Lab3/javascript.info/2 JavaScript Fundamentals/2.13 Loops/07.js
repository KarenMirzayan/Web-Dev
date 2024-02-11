//Prime numbers

let  n = prompt("Enter a number", '');

next:
for(let i = 2; i < n; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            continue next;
        }
    }
    alert(i);
}