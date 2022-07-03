console.log(12 + 25);               // exercise 1
console.log(1 + 2 + 3 + 4 + 5 + 6); // exercise 2
console.log((4 + 6 + 9) / 77);      // exercise 3

let a = 10;                         // exercise 4
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);

const MAX = 57;                     // exercise 5
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage)

// functions

function add7(number){              // exercise 1
    console.log(number + 7);
}

add7(5);

function multiply(multiplicand, multiplier){
    console.log(multiplicand * multiplier);
}

multiply(4, 5);

function capitalize(string){
    const lowerString = string.toLowerCase().slice(1);
    const firstChar = string.charAt(0).toUpperCase();
    console.log(firstChar + lowerString);
}

capitalize("hEllO tHere");

function lastLetter(string){
    console.log(string.slice(-1));
}

lastLetter("abcd");