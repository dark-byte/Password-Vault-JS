window.addEventListener('load', intialize)

function intialize(){
    document.getElementById('addEntry').addEventListener("click", function addEntry(event){
        event.preventDefault();
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value;
        const site = document.getElementById("site").value;
    
        storedArr = []
        
        let entry = {
            Username: username,
            Password: password,
            Site: site
        };
        
        if(localStorage.getItem('entries') === null){
            storedArr.push(entry)
            localStorage.setItem('entries', JSON.stringify(storedArr))
        } else{
            storedArr = JSON.parse(localStorage.getItem('entries'))
            storedArr.push(entry)
            localStorage.setItem('entries', JSON.stringify(storedArr));
        }
    
        
        getEntries()
    })
}


function onLogin(){
    const loginUsername = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;
    
    if(loginUsername === localStorage.getItem("login-username") && 
    loginPassword === localStorage.getItem("login-password")){
        window.location.href = "index.html"
    } else{
        alert("Incorrect Username or Password!")
    }
    
}


signUp = () =>{
    const loginUsername = document.getElementById("username").value
    const loginPassword = document.getElementById("password").value;
    const loginConPass = document.getElementById("conPass").value;
    
    if(loginPassword === loginConPass && loginUsername && loginPassword){
        localStorage.setItem("login-username", loginUsername)
        localStorage.setItem("login-password", loginPassword)
        window.location.href = "login.html"
    } else if(!loginUsername || !loginPassword){
        alert("Username or Password cannot be empty!")
    } else if(loginConPass !== loginPassword){
        alert("Passwords do not match!")
    }
    
}


getEntries = () =>{
    let output = ''
    let formatedEntries = []
    const table = document.getElementById("entry-table");
    formatedEntries = JSON.parse(localStorage.getItem('entries'))
    if(localStorage.getItem('entries')){
        for(let i = 0; i<formatedEntries.length; i++){
            output += `
            <tr>
                <td>
                    <p>`+ formatedEntries[i].Site +`</p>
                </td>
                <td>
                    <p>`+ formatedEntries[i].Username +`</p>
                </td>
                <td>
                    <p>`+ formatedEntries[i].Password +`</p>
                </td>
            </tr>
            `
        table.innerHTML =
            `<tr>
            <th><p>Site</p></th>
            <th>
                <p>Username</p>
            </th>
            <th>
                <p>Password</p>
            </th>
            </tr>` + output;
        }

    } else{
        table.innerHTML = 'No Record Found'
    }
}