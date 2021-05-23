function find(array) {
    var s = new Set;
    return array.find(v => s.has(v) || !s.add(v));
}

console.log(find([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(find([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(find([2, 3, 4, 5]));                // undefined