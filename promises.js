fetch('https://jsonplaceholder.typicode.com/posts').then(res =>{
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
    