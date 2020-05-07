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

let numbers = [1,2,3,4,5,6,7,8,9,10];

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

console.log(_.min([34,1,434,123,1441,112,5656,4546],(value)=>{
    return value;
}));    //return elements with min value

console.log(_.sortBy(movies,"name")); // sorts in ascending order need to provide property on which you need to sort

console.log(_.sortBy([34,1,434,123,1441,112,5656,4546],(val)=>{
    return val;
}));  // sorts number in ascending order

console.log(_.groupBy(movies,(movie)=>{
    return movie.genre;
}));  //returns object with elements which are grouped by provided argument

console.log(_.countBy(movies,(movie)=>{
    return movie.genre == "Action";
}));   //will return count of objects/elements satisfying condition as true count rest as false count

console.log(_.shuffle(movies)); // Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle

console.log(_.sample(movies,2)); //Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

console.log(_.size(movies)) //return no. of elements in list

console.log(_.partition([34,1,434,123,1441,112,5656,4546],(value)=>{
    return value % 2 ==0;
}));  // will seperatte out elemets in seperate array which satisfies condition

console.log(_.compact([false,null,undefined,2,4,"xyz",0])); // will return array without falsy value

console.log(_.first(numbers,3));

///returns first n numbers of array passed

console.log(_.initial(numbers));  //will eliminate n elements from last if not provided last element get eliminated

console.log(_.last(numbers,3));  //will return last n elements if not provided then last element is returned

console.log(_.rest(numbers,5));  //will return elements from provided index if not first will be skipped

console.log(_.flatten([1,3,[2,4],[12,34,12,34]])); //flattens the array check output you will get it

console.log(_.without(movies1,"Transporter"));  //will provide array without provided value & can take multiple values also

console.log(_.union([1,2,3],[2,3,4]));  //does union of array

console.log(_.intersection([1,2,3],[2,3,4])); //does intersection

console.log(_.difference([1,2,3],[2,3,4])); //finds uncommon elemets

console.log(_.uniq([1,1,2,2,3,3,2,1,4,5])); //return unique elements

console.log(_.zip(["one",1],["two",2],["three",3])); //creates arrays based on indexes i.e. elements with same index are grouped in one array

console.log(_.unzip([["one",1],["two",2],["three",3]]));  //i did not get this

console.log(_.indexOf(movies1,"Transporter")); //get index of first occurance

console.log(_.lastIndexOf([1,2,3,4,5,1],1)); // gets index os last occurance



