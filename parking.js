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



class AddVehicle{
    constructor(){
        
    }

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