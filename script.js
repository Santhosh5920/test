
function log(){
    let uname = document.getElementById("name").value
    let pass = document.getElementById("pass").value
    if(uname=="" && pass ==""){
        alert("please fill username and password")
    }
    else if(uname==""){
        alert("username must be filled")
    }
    else if(pass==""){
        alert("password must be filled")
    }
}