'use strict';
// This is my practice for primitives

// Numbers
// alert(0xef);

// let num1 = +prompt("Enter a number",0);
// let num2 = +prompt("Enter a number", 0);
// alert(num1+num2);

// Strings
let mult = ` one
* two
* three
`;

// let phone = "iPhone 7"
// for(let char of phone) {
//     alert(char);
// }

// alert("Wow".includes("Wow"));

function truncate(str,maxlength){
    // string longer than maxlength replace that point with elipsis character
    if(str.length > maxlength){
        alert(str.slice(0,maxlength-1)+"...");
    } else {
        alert(str);
    }
    // alert("The string is less than the max length.")
}

truncate("What I'd like to tell on this topic is:", 20)
truncate("Hi everyone!", 20)