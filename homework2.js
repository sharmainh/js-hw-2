//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// for(i = 0; i < Object.keys(person3).length; i++){
    let parse = () =>{
        for(i = 0; i < Object.keys(person3).length; i ++){
            value = Object.values(person3)[i];
            name = Object.keys(person3)[i]; 
            console.log(name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() +': ' + value);
            if(Array.isArray(value)){
                console.log(value)
            };
        };    
    };
parse()
  

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age){
    this.name = name;
    this.age = age;

//Adding new method printInfo
// Use an arrow to create the printInfo method
    this.printInfo =  () =>{
        console.log(`My name is ${this.name}, I am ${this.age}.`);
        return 'Returned Info';
    };
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = () =>{
        this.age += 1;
        console.log(this.age);
        return "Returned New Age";
    };
};
// Create 2 new people
let person1 = new Person('Candace', 20);
let person2 = new Person('Kyle', 85);

//Print info for both people
console.log(person1.printInfo());
console.log(person2.printInfo());

//increment one persons age by 3 years
console.log(person2.addAge());
console.log(person2.addAge());
console.log(person2.addAge());


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let promise = new Promise((resolve, reject) =>{
    let str = 'HelloWorld';
    if (str.length > 10){
        resolve("Big word");
    }else{
        reject("Small Number");
    };
});
promise.then((message) =>{
    console.log(`This is a ${message}`)
}).catch((message) =>{
    console.log(`The length of this string is a ${message}`)
});
