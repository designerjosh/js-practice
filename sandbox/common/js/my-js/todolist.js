



// 'WHILE' LOOP

// const password = "JavaScript4Life!";
// let guess = prompt("Password: ");

// while (guess !== password) {
//     guess = prompt("Password Incorrect. Please try again: ");
// }

// console.log("Password Accepted.");




// 'BREAK' FUNCTION

let input = prompt("Say, something!");
while (true) {
    input = prompt(`${input.toUpperCase()}!`);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("Ok. You win...");


let input = prompt("What would you like to do?");
const todoList = ['Collect chicken eggs', 'Clean cat litter box', 'Mow the lawn', 'Clean the garage', 'Update the budget'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {

        console.log('=============TO-DO-LIST============');

            // FOR-OF Loop

            for (let listItem of todoList) {
                console.log(`${todoList.indexOf(listItem)}: ${listItem}`);
            }

            // FOR Loop

            // for (let i = 0; i < todoList.length; i++) {
            //     console.log(`${i}: ${todoList[i]}`);
            // }

        console.log('=============TO-DO-LIST============');
    
    } else if (input === 'new') {
    
        const newTodo = prompt("NEW | Describe your new todo?");
        todoList.push(newTodo);
        console.log(`[${newTodo}] has been added to the list.`);
    
    } else if (input === 'delete') {
        let index = parseInt(prompt("DELETE | Enter the index of the todo you'd like to delete?"));
        while (Number.isNaN(index)) {
            index = parseInt(prompt("DELETE | Not a valid index. Please enter a valid number index of the todo you'd like to delete?"));
        } 
        
        const deleted = todoList.splice(index, 1);
        console.log(`[${deleted}] has been deleted from the list.`);
        
    }
    
    input = prompt("What would you like to do?");
}

console.log("YOU QUIT THE APP.");