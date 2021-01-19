let student={
    name:"gp",
    age:22,
    sslc:"2nd class",
    puc:"1st class",
    btech:"1st class"
}

let {name, age, btech} = student;
console.log(name);// destructuring is happing via object key
console.log(age);
console.log(btech);
// console.log(puc); cannot print due to not destructured

let skills =['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'];

let[skill1, skill2, skill3, ...remSkills] = skills;

console.log(skill1); // destructuring is happening via array index
console.log(skill2);
console.log(skill3);
console.log(remSkills);//only prints the remaining courses
