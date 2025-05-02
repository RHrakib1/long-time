let x = 5;
function calculate() {
    let x = 10;

    if (x > 5) {
        let y = x + 5;
        console.log("Inside if:", y);
    }

    for (let i = 0; i < 2; i++) {
        var z = i + x;
    }

    console.log("Inside function x:", x);
    console.log("Inside function z:", z);
    // console.log("Inside function y:", y); 
}

calculate();

console.log("Global x:", x);