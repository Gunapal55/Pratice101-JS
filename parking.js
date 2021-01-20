function validateMyForm() {
    var valid = false;
    var x, text;

    own=    document.myForm.ownerName.value;
  lp = document.getElementById("numPlate").value;
    err = document.getElementById("errorNum");
    console.log(err);
    console.log(own);
    // if(own< )
// 
  if ( x === 17 ) {
    valid=true;
    return valid;
  } else {
    err.innerText= "Invalid License Plate Number";
   
  }
  return valid;
}


function addVehicle(){
    var vehicleData = document.

}
        
    



(function () {
    //To check whether employee array is available in local stroage or not
    if(Array.isArray(getEmployees())){
                    displayEmployees();
    }else{
        //if employee array is not available set it to empty array
        setEmployees([]);
    }
})();

function getEmployees(){
    return JSON.parse(localStorage.getItem('employees'));
}

function setEmployees(employees) {
    localStorage.setItem('employees', JSON.stringify(employees));
}

function displayEmployees() {
    var employeeData = getEmployees();
    var tableBody="";
    employeeData.forEach(function (employee, index) {
        tableBody +=`
        <tr>
        <td>${index+1}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        </tr>
        `;   
});
 document.getElementById('t-body').innerHTML = tableBody;
}
    
function onSubmit(){
var form = document.employeeForm;
var employee ={
    name: form.name.value,
    email: form.email.value
}
var employeeData = getEmployees();
employeeData.push(employee);
setEmployees(employeeData);
displayEmployees();
}








fetch('').then(res =>{
    return res.json();
}).then(data => {
    var tableBody= "";
data.forEach( (user)=>{
     tableBody +=`
        <tr>
        <td>${user.id}</td>
        <td>${user.userId}</td>
        <td>${user.title}</td>
        <td>${user.body}</td>
        </tr>
        `; 
        document.getElementById('t-body').innerHTML = tableBody;

    });
}) 