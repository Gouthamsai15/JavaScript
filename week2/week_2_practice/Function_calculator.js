function calculator(a, b, operator){
 if(operator == "+"){
 console.log(a + b)
 }
 else if(operator == "-"){
 console.log(a - b)
 }
 else if(operator == "*"){
 console.log(a * b)
 }
 else if(operator == "/"){
 console.log(a / b)
 }
 else{
 console.log("Invalid Operator")
 }
}
calculator(10, 5, "+")
calculator(10, 5, "-")
calculator(10, 5, "*")
calculator(10, 5, "/")