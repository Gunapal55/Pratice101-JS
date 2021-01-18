



var newL = document.createElement("li");
newL.innerText ="Hibernate"

function addEle() {
    var s= document.getElementById('test');
    console.log(s.childNodes);
    // s.appendChild(newL); will append in last
//To appedn in 1st 2-ways:
    // s.insertBefore(newL, s.firstElementChild);
    // s.insertBefore(newL, s.childNodes[1]);

    // s.insertBefore(newL, s.childNodes[3]);

    
    // s.insertBefore(newL, s.firstElementChild.nextElementSibling);
    
    s.insertBefore(newL, s.lastElementChild.previousElementSibling);
}

function removeEle() {
    var s = document.getElementById('test');
    // s.removeChild(s.firstChild);
    //  s.removeChild(s.lastElementChild);
    s.removeChild(s.childNodes[2]);
}