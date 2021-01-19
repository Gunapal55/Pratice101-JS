//spread rest operator
var names =['gp', 'lp', 'ab'];
console.log("original names", names);

var clones =[...names]
console.log("cloning using spread operator", clones);

var spreadNames =[...names, 'gg', 'bh'];
console.log("Using spread", spreadNames);

let aadhar= {
        aadharNo: 123432112,
        name: "gunapal",
        age: 23
}

let tyss={
    ...aadhar,
    empId: 31221,
    salary: 22000
}

console.log("Copied using spread object", tyss.aadharNo);

console.log("Copied using spread object", tyss.name);

console.log("Copied using spread object", tyss.empId);

console.log(tyss.salary);

//Rest param

function sum(...args){
console.log("arguments caught..", args);
return args.reduce(function (val1, val2){
        return val1+val2;
})
}


console.log(sum(2,2,4,6));
