/**
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 */

/**

fetch().then().then()

initialFetchFunction(url).thenMethod(callBackFunction(requestResponse)).thenMethod(callBackFunction(requestResponse))

Fetch this url from the server.

Once the server returns a response...

then pass the response to and execute the next callback function, and return a value.

then pass the return value to and execute the next callback function, and return a value.




functions = series of statements executed on arguments assigned to a name

object = an array of properties

property = "key : value" pair

method = function as an object–property

callback = function that is passed as an argument to another function

initialFunction(functionAsArgument) {
    statement;
}

object.method()
function().method()
fetch().then()


function().method(callback)
higherOrderFunction(callback)
higherOrderFunction(callback).method()
higherOrderFunction(callback).method(callback)

variable = [any of the above]



const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

const variable = new Promise(f (property1, property2) {
    function(f() {
        property1("value");
    }, delay);
})

variable = new Object(function(objectProperty))

function(objectProperty) {
    timeFunction(emptyFunction())
}

emptyFunction() {
    objectProperty("value");
}

 */


function getTodos(callback) {
    //define the request
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, JSON.parse(request.responseText));
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('could not fetch the data');
            console.log(request.status);
            callback('could not fetch data', undefined);
        }
        
    });

    //fire the request
    request.open('GET','../json/sandbox.json');
    request.send();
}

getTodos((err, data) => {
    console.log('callback fired');
    // console.log(err, data);
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});