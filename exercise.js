


let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets);  8
console.log(yearNeptuneDiscovered); 1846


let planetFacts = {
    Planets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {Planets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); 
//     {yearMarsDiscovered:1659, yearNeptuneDiscovered:1846}
  

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Prints: 'Your name is Alejandro and you like purple'
  getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
getUserData({}) // 'Your name is undefined and you like green'
  
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // 'Raindrops on roses'
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); //
   
//   0: "Bright copper kettles"
//   1: "warm woolen mittens"
//   2: "Brown paper packages tied up with strings"

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


// ES5:
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
var b = obj.numbers.b;
  
// ES2015:

const obj = {
    numbers: {
       a: 1,
       b: 2
    }
};

const { a, b } = obj.numbers


// ES5:
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015:
let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];



const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})