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
let input = prompt("What is your favorite color","yellow")
alert(`Your favorite color is ${input}`)
// cancel = null

// confirm
let ques = confirm("Are you hungry");
alert(ques)
// cancel = false

let namer = prompt("What is your name?")
// alert(`Your name is ${namer}`)

// Ternary operator
let nameeval = (name == "Alex") || (name == "alex") ? alert(`${namer} is a cool name`) : alert(`${namer} is kind of a bad name`);

// If equivalent
/* if ((namer == "Alex") || (namer == "alex")) {
    alert(`${namer} is a cool name`)
} else {
    alert(`${namer} is kind of a bad name`)
} */