const _ = require('underscore');

let movies = [
    { name : "Robocop" , genre: "Action"},
    { name : "Hobbit" , genre: "Adventure"},
    { name : "Terminator" , genre: "Action"},
    { name : "Southpaw" , genre: "Action"},
    { name : "Extraction" , genre: "Action"},
    { name : "Avengers" , genre: "Fantasy"},
    { name : "Arjun Patiala" , genre: "Comedy"},
    { name : "Priest" , genre: "Action"},
    { name : "Transporter" , genre: "Action"},
    { name : "Need For Speed" , genre: "Racing"},
    { name : "Red Dragon" , genre: "Thriller"},
    { name : "Titanic" , genre: "Romance"},
    { name : "Elysium" , genre: "Sci-fi"},
    { name : "Interstellet" , genre: "Sci-fi"},
    { name : "Conjuring" , genre: "Horror"},
    
];

let movies1 = ["Avengers","Transporter"];

console.log(_.isEmpty(movies));
console.log(_.findWhere(movies,{ genre : "Sci-fi"}));  //finds and return object even after passing only one property of obj ( returns first matched)
console.log(_.where(movies,{genre : "Action"}));  ////finds and return object even after passing only one property of obj ( returns all matched)

console.log(_.contains(movies1,"Avengers")); //direct comparison only can be searched through contains method //// does not work with object shown below

console.log(_.contains(movies,{ name : "Avengers" , genre: "Fantasy"})); // will print false as memory location is different of passed object

_.each(movies1,(val)=>{
    console.log(val); 
});  //iterates through list and for every iteration executes function that is being passed.
console.log(movies1);

console.log(_.map(movies1,(val)=>{
    return val == "Transporter";       //if condition true returns true ortherwise false
}));
console.log(movies1);

console.log(_.find(movies1,(val)=>{
    return val == "Avengers";
}));  //Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.


console.log(_.filter(movies,(movie)=>{
    return movie.genre == "Action";
}));   //returns array of elemets which satifies provided condition

console.log(_.reject(movies,(movie)=>{
    return movie.genre == "Action";
}));    //returns array of elemets which DOES NOT satifies provided condition [opposite of filter]

console.log(_.every([1,2,1,1],(value)=>{
    return value == 1;
}));  //return true only when all elements in array follows condition otherwise false

console.log(_.some([1,1,1,2],(value)=>{
    return value == 2;
})); // returns true when at least one condition is satified  works like "OR" operation 

console.log(_.pluck(movies,"name"));
//extracts propery inside array elements and returns array of value of property

console.log(_.max([34,1,434,123,1441,112,5656,4546],(value)=>{
    return value;
}));        //return element with max value