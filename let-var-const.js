var a =19;

var a=22; // No error 

let b=10;

// let b=20; error due to redclration of b

console.log(a);
console.log(b);

function demo(){
    var name = "gp!";
    let dogName = "scooby!"
    console.log("inside demo my name is ", name);
    console.log("inside demo dog name ", dogName);

    if(!name ==null) {
        let test = "yup inside block!"
        console.log("let test inside if block", test);

    }

    // console.log("let test outside the if block", test); Error due to let scope is block level...

}

demo();
// console.log("outside function ", name); outside of the function i.e out of scope
// console.log("outside demo dog name ", dogName); Error due to function block level scope





