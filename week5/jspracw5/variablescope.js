// THis is where I will go over variable scope in js
/*
scope === variable access
context === this's value
*/
// Two scopes: Global and Local

// Global num1
let num1 = 3;

function test(){
    let x = 'local x';
    console.log(num1);
}

test();
console.log(num1);