// push Adds item at end.

let fruits = ["apple", "banana"]
fruits.push("mango")
console.log(fruits)


// pop Removes last item.

let fruits2 = ["apple", "banana", "mango"]
fruits2.pop()
console.log(fruits2)


// shift Removes first item.

let numbers = [10, 20, 30]
numbers.shift()
console.log(numbers)


// unshift Adds item at beginning.

let numbers2 = [20, 30]
numbers2.unshift(10)
console.log(numbers2)

// splice Removes item from specific position

let numbers3 = [10, 20, 30]
numbers3.splice(1, 1)
console.log(numbers3)

// length

let colors = ["red", "blue", "green"]
console.log(colors.length)


// Loop Through Array

let fruits3 = ["apple", "banana", "mango"]
for(let i = 0; i < fruits3.length; i++){
    console.log(fruits3[i])
}