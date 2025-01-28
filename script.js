passwords.innerHTML =" password"
function log(){
    let passt = document.getElementById("passwords").value
    let uname = document.getElementById("name").value
    let pass = document.getElementById("pass").value
    let validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    alert(passt)
    // if(uname=="" && pass ==""){
    //     alert("please fill username and password")
    // }
    // else if(uname==""){
    //     alert("username must be filled")
    // }
    // else if(pass==""){
    //     alert("password must be filled")
    // }
}