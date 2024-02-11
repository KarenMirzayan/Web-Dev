// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");