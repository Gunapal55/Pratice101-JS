
(function () {

  if(Array.isArray(getVehicle())){
                  displayVehicle();
  }else{
      setVehicle([]);
  }
})();

const form = document.getElementById('newForm');
const name = document.getElementById('ownerName').value;
var num = document.getElementById('numPlate');
var fromDate = document.getElementById('fromDate');
var toDate = document.getElementById('toDate');


form.addEventListener('submit',(e)=>{
  let msg =[]
 let name = document.getElementById('ownerName').value;
 let lp = document.getElementById("numPlate").value;
 let date1 =document.getElementById('fromDate').value;
 let date2 = document.getElementById('toDate').value;
 let err1 = document.getElementById('errName');
 let err2 = document.getElementById('errorNum');
 let err3 = document.getElementById('errorDate');
  if(name.length<=5){
    msg.push("inavild Name");
    err1.innerText= "Name must contain atleast 6 letters";
  }

 if ( lp.length < 15 || lp.length > 18) {
    msg.push("Invalid LP")
    err2.innerText= "Invalid Vehicle Plate Number";
   }

  if(date2 < date1){
    msg.push("Backe dated operation")
    err3.innerText="Backe Dated Booking is Not Possible!"
  }

  if(msg.length>0){
    e.preventDefault();
  }
})




function setVehicle(vehicle) {
  localStorage.setItem('vehicle', JSON.stringify(vehicle));

}

function getVehicle(){
  return JSON.parse(localStorage.getItem('vehicle'));
}


function onSub(){
  
  let newForm =document.myForm;

  var vehicle={
    name :newForm.ownerName.value,
    numPlate: newForm.numbPlate.value,  
    from: newForm.start.value,
    to: newForm.end.value
  }
  
  console.log(vehicle);
  let vehicleData = getVehicle();
  vehicleData.push(vehicle);
  setVehicle(vehicleData);
  displayVehicle();

  }

 
  function displayVehicle() {
    let img1 = "<button class=' rounded-sm btn btn-danger btn-sm' onClick='vehDelete()'>X</button>"
    console.log(img1);
  
    var vehicleData = getVehicle();
    var tableBody="";
    vehicleData.forEach(function(vehicle, index) {
        tableBody +=`
        <tr id="tr-id">
        <td>${index+1}</td>
        <td>${vehicle.name}</td>
        <td>${vehicle.numPlate}</td>
        <td>${vehicle.from}</td>
        <td>${vehicle.to}</td>
        <td>${img1}</td>
        </tr>
        `;   
  });
  document.getElementById('t-body').innerHTML = tableBody;
  }
    
  function searchRes(){

          document.querySelector('#search').addEventListener('keyup', function searchTable(){
            //Get value of the input search
            const searchValue = document.querySelector('#search').value.toUpperCase();
            //Get all lines of table body
            const tableLine = (document.querySelector('#t-body')).querySelectorAll('tr');
            //for loop #1 (used to pass all the lines)
            for(let i = 0; i < tableLine.length; i++){
                var count = 0;
                //Get all collumns of each line
                const lineValues = tableLine[i].querySelectorAll('td');
                //for loop #2 (used to pass all the collumns)
                for(let j = 0; j < lineValues.length - 1; j++){
                    //Check if any collumn of the line starts with the input search string
                    if((lineValues[j].innerHTML.toUpperCase()).startsWith(searchValue)){
                        count++;
                    }
                }
                if(count > 0){
                    //If any collumn contains the search value the display block
                    tableLine[i].style.display = '';
                }else{
                    //Else display none 
                    tableLine[i].style.display = 'none';
                }
                    }        
      }

  
          )}

  function vehDelete(){
      alert("Selected Record will be deleted")
    document.getElementById('vtable').deleteRow(1);
  
    // vData = getVehicle();
    // console.log(isArray(vData));
    // vData.indexOf()
    // //  let trNo= document.getElementById('tr-id');
    

  }







    

