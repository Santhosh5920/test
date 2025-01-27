function info(){
    let name = document.getElementById("name").value
    let age = Number(document.getElementById("age").value)
    let address = document.getElementById("add").value
    let result = document.getElementById("result")
    result.innerHTML = "hi "+ name +" and your age is"+ age +"and the address is  "+address
}