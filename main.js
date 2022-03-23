
function onLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === localStorage.getItem("username") && 
    password === localStorage.getItem("password")){
        window.location.href = "index.html"
    }
    
}


signUp = () =>{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value;
    const conPass = document.getElementById("conPass").value;

    if(password === conPass && username && password){
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
    } else if(!username or !password){
        alert("Username or Password cannot be empty")
    }

    
}


