//---------------------------------------
// DEFINING METHODS
//---------------------------------------
// Syntax - object.method /or/ object['method'].
const object = {
    method : function(arr1, arr2) {
        return //statement dealing with arr1[] and arr2;
    }
}



let rent = {
    planned: 0,
    spent: 0
};

let groceries = {
    planned: 0,
    spent: 0
};

const update = {
    planned: function(name, amount) {
        return name.planned = amount;
    },
    spent: function(name, amount) {
        return name.spent += amount;
    }
}

const check = {
    planned: function(name) {
        return name["planned"];
    },
    spent: function(name) {
        return name["spent"];
    },
    remaining: function(name) {
        return name["planned"] - name["spent"];
    }
}


const cat = {
    name: 'Opal Anderson',
    color: 'grey',
    personality: 'scared',
    meow() {
        console.log(`${cat.name}, my ${cat.personality} little ${cat.color} kitty, says Meow!`)
    }
}

cat.meow() // Opal Anderson, my scared little grey kitty, says Meow!


const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}

hen.eggCount // 0
hen.layAnEgg() // EGG
hen.name // Helen




//---------------------------------------
// TRY/CATCH
//---------------------------------------

try {
    const hen = {
        name : 'Helen',
        eggCount : 0,
        layAnEgg() {
            this.eggCount += 1;
            return "EGG";
        }
    }
}
catch {
    console.log("ERROR!")
}

//---------------------------------------
//FOREACH METHOD to FOR...OF LOOPS
//---------------------------------------

const movies = [
    {
        title: 'Gladiator',
        year: 2000,
        score: 100
    },
    {
        title: 'Inception',
        year: 2010,
        score: 95
    },
    {
        title: 'Avatar',
        year: 2009,
        score: 92
    },
    {
        title: 'The Chosen',
        year: 2017,
        score: 110
    },
    {
        title: 'Nepoleon Dynamite',
        year: 2004,
        score: 30
    }
]

console.log('This is a .forEach method used to write sentences from data:')
movies.forEach(function(mov){
    console.log(`${mov.title} scored ${mov.score} out of 100.`)
})

// console.log('This is a for...of loop used to write the same sentences:')
// for (let mov of movies) {
//     console.log(`${mov.title} scored ${mov.score} out of 100.`);
// }


//---------------------------------------
//THE MAP METHOD
//---------------------------------------

const titles = movies.map(function(mov) {
    return mov.title.toUpperCase();
})

console.log(titles);


//---------------------------------------
// ARROW FUNCTIONS
//---------------------------------------
// Used as a shorthand for function expressions ONLY. You cannot use arrow syntax to define a stand-alone function (it would need a name)

const add = function(x,y) {
    return x + y;
}
// Shorthand to...
const subtract = (x,y) => {
    return x - y;
}

//parenthesis are optional with single argument functions - (num) => /or/ num =>
const square = num => {
    return num ** 2;
}

const rollTheDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// IMPLICIT RETURNS
// Automatically returns 1 value inside of an arrow function

const isEven = function(num) { //regular function expression
    return num % 2 === 0;
}

const isOdd = (num) => { //arrow function with ()
    return num % 3 === 0;
}

const isPercent = num => { //arrow function no ()
    return num / 100;
}

const isKilo = num => ( //arrow function with implicit return: () instead of {}
    num * 1000       //no return or semicolon needed
)

const isSquare = num => (num ** 2) //one-liner implicit return


//---------------------------------------
// SET TIMEOUT and SET INTERVAL
//---------------------------------------
// console.log is turned into a function so that the computer does not execute immediately.

console.log("Hello!");
// setTimeout(() => { console.log('Are you still there?...') }, 3000)


// const id = setInterval(() => { console.log(Math.random()) }, 3000)

// clearInterval(id); // Use this function to clear an interval function that won't stop. Set the setInterval function to a variable called 'id' ... then pass that 'id' variable through clearInterval().



//---------------------------------------
// FILTER METHOD
//---------------------------------------

transactions = [
    {
        merchant : 'Liz',
        amount : 1425,
        date : 1,
        category : 'Rent'
    },
    {
        merchant : 'Verizon',
        amount : 169.42,
        date : 10,
        category : 'Cellphones'
    },
    {
        merchant : 'City of Independence',
        amount : 321.59,
        date : 5,
        category : 'Utility bill'
    },
    {
        merchant : "TED's Trash",
        amount : 25,
        date : 2,
        category : 'Trash service'
    },
    {
        merchant : 'Costco',
        amount : 231.29,
        date : 4,
        category : 'Groceries'
    },
    {
        merchant : 'Costco',
        amount : 69.43,
        date : 2,
        category : 'Groceries'
    },
    {
        merchant : 'Hy-Vee',
        amount : 14.86,
        date : 2,
        category : 'Groceries'
    },
    {
        merchant : 'Natural Grocers',
        amount : 36.24,
        date : 2,
        category : 'Groceries'
    },
    {
        merchant : 'Natural Grocers',
        amount : 92.82,
        date : 5,
        category : 'Groceries'
    },
    {
        merchant : 'Costco',
        amount : 41.22,
        date : 2,
        category : 'Fuel'
    },
    {
        merchant : 'QuikTrip',
        amount : 49.33,
        date : 9,
        category : 'Fuel'
    }
];

const costco = transactions.filter((tra) => {
    return tra.merchant == 'Costco';
})

const natGrocers = transactions.filter((tra) => {
    return tra.merchant == 'Natural Grocers';
})

const quikTrip = transactions.filter((tra) => {
    return tra.merchant == 'QuikTrip';
})

const hyVee = transactions.filter((tra) => {
    return tra.merchant == 'Hy-Vee';
})

const verizon = transactions.filter((tra) => {
    return tra.merchant == 'Verizon';
})

const large = transactions.filter((tra) => {
    return tra.amount >= 200;
})

const medium = transactions.filter((tra) => {
    return tra.amount >= 50 && tra.amount < 200;
})

const small = transactions.filter((tra) => (tra.amount < 50))

const week1 = transactions.filter((tra) => (
    tra.date > 0 && tra.date <= 7
))

const week2 = transactions.filter((tra) => (
    tra.date > 7 && tra.date <= 14
))

const groceryMerch = transactions.filter(tra => tra.category === 'Groceries').map(tra => tra.merchant)


//---------------------------------------
// EVERY and SOME METHODS
//---------------------------------------

transactions.every(tra => tra.amount >= 100) // false

const someOver100 = transactions.some(function(tra) {
    return tra.amount >= 100;
}) // true


set1 = [8,6,5,4,7,32,14,567,654,3,566,23] // not all evens
set2 = [8,6,4,32,14,654,566] // all evens

// Normal function:
function allEvens(numbers) {
    return numbers.every(function(num) {
        return num % 2 === 0;
    });
} // false

//Expression function (with shorthand):
// const allEvens = numbers => numbers.every(num => num % 2 === 0);


//---------------------------------------
// REDUCE METHOD
//---------------------------------------

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});


const prices = [9.99, 11.49, 99.95, 99.99, 0.99, 2.50, 3.50];

const total = prices.reduce((total, price) => {
    return total + price;
});

const minPrice = prices.reduce((minThusFar, nextPrice) => {
    if (nextPrice < minThusFar) {
        return nextPrice;
    }
    return minThusFar;
});

const maxPrice = prices.reduce((maxThusFar, nextPrice) => {
    if (nextPrice > maxThusFar) {
        return nextPrice;
    }
    return maxThusFar;
});


//---------------------------------------
// DEFAULT PARAMS
//---------------------------------------
// Giving the function a default parameter in the case that no parameter is passed in.

// The OLD way of doing it...
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1
}

// The NEW way of doing it...
function rollDie(numSides = 6) {  //assign the default to the parameter with =
    return Math.floor(Math.random() * numSides) + 1
}


//---------------------------------------
// SPREAD IN FUNCTIONS
//---------------------------------------
// ... breaks an array or object into its separate parts and passes each one through as an individual argument to a function.

const digits = [23, 25, 2367, 34, 21, 2]

console.log(...'JOSH') // J O S H
console.log(...digits) // 23 25 2367 34 21 2


//---------------------------------------
// SPREAD WITH ARRAYS
//---------------------------------------
// Combine arrays into a single new array.

const cats = ['Opal', 'Evie', 'Cleo', 'Rosie'];
const dogs = ['Kissie', 'Chase', 'Copper'];

const allPets = [...cats, ...dogs];

//---------------------------------------
// SPREAD WITH OBJECTS
//---------------------------------------
// Combine objects into a single new object.
// When different values for a common key are copied into the new object, the parameter for the latter object takes precedence over all the rest. If a new value for that key is created, then it overrides the values from the original objects.

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {...feline, ...canine} // { legs: 4, family: 'Caninae', isFurry: true }
const dogCat = {...canine, ...feline} // { isFurry: true, family: 'Felidae', legs: 4 }
const cog = {...canine, ...feline, family: 'Cog'} // { isFurry: true, family: 'Cog', legs: 4 }

const colors = {...['red', 'blue', 'green']} // { 0: 'red', 1: 'blue', 2: 'green' }
const myName = {...'Josh'} // { 0: 'J', 1: 'o', 2: 's', 3: 'h' }


// Copy data from form and add other information

const dataFromForm = {
    email: 'joshanderson116@gmail.com',
    username: 'joshanderson116',
    password: 'Act4Him!'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false };


//---------------------------------------
// REST PARAMS
//---------------------------------------
// Rest essentially does the reverse of spread. If you pass an array into a function using spread (...array), it converts the array into separate arguments. If you pass multiple arguments into a function using rest (...arr), it converts the arguments into a combined array with the given name (arr).

const people = ['James', 'Brian', 'JoAnn', 'Sally', 'Murphy']

function spread(array) {   // spread(people)
    console.log(...array); // James Brian JoAnn Sally Murphy
}

function rest(...arr) { // rest(2,4,3,5,7,5,9)
    console.log(arr);   // [2, 4, 3, 5, 7, 5, 9]
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}


//---------------------------------------
// DESTRUCTURING ARRAYS
//---------------------------------------
// singling out elements from an array and storing them in a separate variable

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

//ORDER DOES MATTER!
const [highScore, runnerUp, ...everyoneElse] = scores;
// highScore = 929321
// runnerUp = 899341
// everyoneElse = [888336, 772739, 543671, 243567, 111934]



//---------------------------------------
// DESTRUCTURING OBJECTS
//---------------------------------------
// singling out properties from an object and storing them in a separate variable

const user = {
    email: 'joshanderson116@gmail.com',
    password: 'Act4Him!',
    firstName: 'Joshua',
    lastName: 'Anderson',
    born: 1994,
    died: 'TBD',
    bio: 'Josh Anderson is an incredibly skilled and talented web developer, up and coming in the software engineering space, and will knock all your socks off!',
    city: 'Portland',
    state: 'Oregon'
}

//ORDER DOES NOT MATTER! Each variable matches the property key name.
const { email, firstName, lastName, bio, city, state } = user;

//Rename property variables as you single them out.
const { born:birthYear, died:deathYear } = user;



//---------------------------------------
// DESTRUCTURING PARAMS
//---------------------------------------

// NORMAL WAY
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// DECONSTRUCT
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// DECONSTRUCT IN PARAM
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}


// NORMAL WAY
movies.map(
    function(movie) {
        return `${movie.title} (${movie.year}) is rated ${movie.score}.`
})

// SHORT FORM
movies.map(movie => {
        return `${movie.title} (${movie.year}) is rated ${movie.score}.`
})

// DECONSTRUCT
movies.map(({title, year, score}) => {
    return `${title} (${year}) is rated ${score}.`
})

// DECONSTRUCT ABSOLUTE SHORTEST
movies.map(({title, year, score}) => (`${title} (${year}) is rated ${score}.`))


