// Same keys and values
/* 
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/
function createInstructor(first, last) {
   return {
      first,
      last,
   };
}

// Computed Property Names
/*
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/
const favoriteNumber = 42;
const instructor = {
   firstName: 'Colt',
   [favoriteNumber]: 'That is my favorite!',
};

// Object Methods
/* 
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
const instructor2 = {
   firstName: 'Colt',
   sayHi() {
      return 'hi!';
   },
   sayBy() {
      return `${this.firstName} says by!`;
   },
};

// createAnimal function
function createAnimal(species, verb, noise) {
   return {
      species,
      [verb]() {
         return noise;
      },
   };
}
const dog = createAnimal('dog', 'bark', 'I am barking!');
