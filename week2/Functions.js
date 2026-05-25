//Basic Function

function greet(){
    console.log("Hello Goutham")
}
greet()

//Function with Parameters

function add(a, b){
    console.log(a + b)
}
add(10, 20)


//Global Scope

let name = "Goutham"
function show(){
    console.log(name)
}
show()

//Local Scope

function show(){
    let name = "Goutham"
    console.log(name)
}
show()