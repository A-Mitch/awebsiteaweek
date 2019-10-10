// Type conversion
let nums = 2*Math.max([92,2,6,4]);
// alert(typeof nums);

// Num conversion - if not a valid num then we get a NaN - Not a number type aka our conversion failed.
let numstring = "423"
numstring = Number(numstring);
// alert(typeof numstring)
// nums = String(nums)
// alert(typeof nums)

// Boolean conversion
name = "Alex"
// alert(Boolean(name))

// Practice
// alert(6 / "3")
// alert("2" * "3")

// Operators
// Unary and binary example
let num1 = -1, num2 = 4;
num1 = -num1; //unary
// alert(num1+num2) //binary

// alert(+"") will convert it to a number it is like Number() except shorter
let tom = "12", steve = "9";
let difference = +tom - +steve
// alert("There are "+ difference +" years between Tom and steve")

// Chaining assignments
let color, banana, favoritecolor;
color = banana = favoritecolor = "Yellow"
// alert(color)

// Exponents 
// alert(3**4)

// You can inc and dec just like java with prefix and postfix formats
let one = 2, two = 1;
// alert(--one);
// alert(++two);

// Comparison
/* We use === (strict equality check) over == (regular equlity check)
    at times because it checks the equality without type conversion.
*/

// alert(0 === false)
// Strict non-equality
// alert(0 !== false)
// alert(null === "\n0\n")

// prompt
// let input = prompt("What is your favorite color","yellow")
// alert(`Your favorite color is ${input}`)
// cancel = null

// confirm
// let ques = confirm("Are you hungry");
// alert(ques)
// cancel = false

// let namer = prompt("What is your name?")
// alert(`Your name is ${namer}`)

// Ternary operator
// let nameeval = (name == "Alex") || (name == "alex") ? alert(`${namer} is a cool name`) : alert(`${namer} is kind of a bad name`);

// If equivalent
/* if ((namer == "Alex") || (namer == "alex")) {
    alert(`${namer} is a cool name`)
} else {
    alert(`${namer} is kind of a bad name`)
} */

// plaign around with some bitwise operators
let next = 1<<3 //Moves 1 tot he left by three places so we get 8 in binary or 1000 :)
// alert(next);

// alert(null || 2 || undefined);
// output is 2

// Password checker.
// let login = prompt("What is your username?");

// if(login == "Admin" || login == "admin"){
//     let password = prompt("Please enter the password: ");
//     if(password == 'TheMaster'){
//         alert("Welcome!");
//     } else if (password == '' || password === null){
//         alert("Canceled");
//     } else{
//         alert("Wrong password");
//     }
// } else if (login == '' || login === null) {
//     alert("Canceled");
// } else {
//     alert("I don\'t know you")
// }

let n = 4;
// while
// while(n>0){
//     alert("Yeet: "+n)
//     n--;
// }

// do while loop
// do {
//     alert("Yeet: " + n)
//     n--;
// } while(n>0);

// ole faithful -- For loop i++ executes the body after each iteration lol
// for (let i = 0; i < 2; i++){
//     alert("Wow");
// }

let num = prompt("What is your number");
// only prints the even numbers
prime: for(let i = 2; i < num; i++){
    for(let j = 2;j<i;j++){
        if (i % j == 0) {
            continue prime;
        }
    }
    alert(i)
}

// Break and continue can't be used with ternary operators

// labels are used to help break out of loops
// labelName: for(...) {...}

/*
outerfunc: for(let i = 0; i<5;i++){
    for(let j = 0; j<5;j++){
        let input = prompt(`Value at coord (${i},${j})`,'')
        if(!input){
            break outerfunc;
        }
    }
}
alert('Done!')
*/
