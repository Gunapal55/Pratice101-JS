
//simple basic fat arrow function
let demo = () => {
    console.log("hi from fat arrow");
}

demo();

//if only one arg is there..
let singleArg = x => {
    console.log("single arg from fat arrow", x);
}

singleArg(12);

//if only one return statment is there..
let singleReturn = (x, y) => x+y;

console.log(singleReturn(2, 4));

