// Objects in javascript are a complex datatypes

const JsUser = {
    name: "Uditansu",
    age: 19
};

JsUser.greeting = function (){
    console.log("Hello Uditansu");
}

JsUser.greeting();

// Object creation using constructors

const tinderUser = new Object() 
tinderUser.id = '123abs';
tinderUser.name = "Udit"

// Nesting of objercts can also easily occur
// merginf two objects

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

const obj3 = { obj1 , obj2};

console.log(obj3);

// This will create the same problem as was created during the time of arrays. Object inside object will be created both will not be combined properly.


// Object.Assign() operates as same as the spread method in case of arrays. This method of objects combines two objects successfully.

const obj4 = Object.assign({}, obj1, obj2); 
console.log(obj4);


// We can also use spread method in this case as well.
const obj5 = {...obj1, ...obj2};
console.log(obj5);

// Accessing dynamic key values



// Constructor function to create objects. When we create objects usinf constructor functions, a singleton object is created.



// Object creation using factory function
// Instead of writing name and age as keys and values both , we use something called as the short hand notation.

function createUser (name, age){
    return{
        name,
        age
    }
}

const user1 = createUser("Tapas", 34);
const user2 = createUser("Suman", 19);


console.log(user1);


// Now we need to check whether a property exists in an object or not using something called the keys.If doing console.log for the propetry we get undefined, then we can confirm that that propewrty does not exist for that respective particular object. 

// now the case becomes interesting when one key eists in the object but the value of the key is set to undefined which is happening the below case. Even if the car key exists, when  we try to print the profile.car it is giving undefined. For this case, we can use 'in' property.

const profile = {
    name: "Uditansu",
    company: "wilson",
    salary: "1.2 Cr",
    car: undefined
}

console.log(profile.car);

console.log("car" in profile);

// the for....in loop


for( let keys in profile){
    console.log(keys);
    console.log(profile[keys]);
}

// the for...in loop will print the keys of the objects in the form of array

// Object references

let fruit = {name: "mango, price: 100 "};
let oneMoreFruit = {name: "mango, price: 100 "};

console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);

// Even if both the objects have same values but they are getting assigned different memory spaces and hence different references

// Object.assign while combining two objects overwrites the values if the keys are same

const target = {p:1, a:2};
const source = {b:3, a:4};

const returnedObj = Object.assign(target, source);

console.log(returnedObj); // { p: 1, a: 3, b: 4 } We will get this in return. The returnedObj assigns the subsequent objects to the first object where both 'a' as their keys and here the value of 'a' is getting overwritten. 









