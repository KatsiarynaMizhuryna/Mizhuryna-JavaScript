// Task 1.
function printValue(value){
   
    return value > 7 ? 'Hello' : 'The number is not greater than 7'
}

function greetingJohn(name){
    
    return name === 'John'? "Hello, John”": "There is no such name"
}

function multipleArray(arr){
    
    return arr.filter(num => num % 3 === 0)
}

// Task 2.
function isBracketSequenceCorrect(sequence) {
    const stack = [];
    for (const char of sequence) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0 ? "The bracket sequence is correct." : "The bracket sequence is incorrect. To fix it, ensure each opening bracket '(' has a corresponding closing bracket ')'."
   
}
console.log(printValue(8))
console.log(printValue(6))
console.log(printValue(9))

///////////////////////////

console.log(greetingJohn("John"))
console.log(greetingJohn('Anna'))

///////////////////////////

console.log(multipleArray([1,2,3,4]))
console.log(multipleArray([5,10,15]))
console.log(multipleArray([9,10,15,30]))

//////////////////////////
console.log(isBracketSequenceCorrect('[((())()(())]]'))