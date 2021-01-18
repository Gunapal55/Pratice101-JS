
var myLink= document.createElement('a');
myLink.textContent ="Google Search"
myLink.href="https://www.google.com/"
myLink.style.color="brown"
myLink.style.fontSize="25px"
myLink.style.textDecoration="none"
myLink.style.border="4px solid teal"

document.body.appendChild(myLink);
console.log(myLink);
// document.body.insertBefore.

function createeleEle(){
        console.log('dom function');

        var hele = document.createElement('h3');
        // hele.innerText ='<h2>Using Inner text</h2>'
        hele.innerHTML ='<h2>Why you clicked you MORON!!</h2>' //only this one understands which is html element or not
        // hele.textContent='<h2>Using Inner text</h2>'
        console.log(hele);

        document.body.appendChild(hele);

}

function addElem() {
    var addEl="New element Added"

    document.body.appendChild(addEl);

    addEl.setAttribute('Id', "someiD")

}
function deleteEle(){
    
addEl.body.style.display
}

function getById(){
    var s = document.getElementById("first")
    console.log(s);
    s.innerText = "Yup Welcome!"
}


function getByTag(){
    var i=1;
    var x =document.getElementsByTagName("p");
    for (const key in x) {
        x[key].innerHTML="<h4>Number is  <h4>"+i 

    }
}

function getByClass() {
    var x=document.getElementsByClassName('test');


}







