const caculator = {
    sum: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    sum: function(a, b) {
        return a / b;
    },
};

console.log("Sum", caculator.sum(4, 2))
console.log("Sub", caculator.sub(23, 124))
console.log("Multi", caculator.sum(412, 212))
console.log("Division", caculator.sum(124, 24))