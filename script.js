function log(){
    let uname = document.getElementById("username").value
    let pass = document.getElementById("pass").value
    let uinput= document.getElementById("user-input")
    let passinput= document.getElementById("pass-input")
    if(uname!=""&& pass !=""){
        uinput.innerHTML=" "
        passinput.innerHTML=" "
        if(pass.length<8){
            passinput.innerHTML="The password must have 8 charaters !"
        }
        else if(pass.search(/[a-z]/)<0){
            passinput.innerHTML="The password must contain a lowercase !"
        }
        else if(pass.search(/[A-Z]/)<0){
            passinput.innerHTML="The password must contain a uppercase !"
        }
        else if(pass.search(/[0-9]/)<0){
            passinput.innerHTML="The password must contain a number !"
        }
    }
    else  if (uname=="" && pass==""){
        uinput.innerHTML="Enter a username"
        passinput.innerHTML="Enter a password"
    }

    else if(uname!="" && pass==""){
        passinput.innerHTML="Enter a password"
        uinput.innerHTML=" "
    }
    else if(uname=="" && pass!=""){
        uinput.innerHTML="Enter a username"
        passinput.innerHTML=" "
    }
}

