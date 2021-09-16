// JAVASCRIPT INTRODUCTION - CONDITIONALS


'use strict'


// DATA - PEOPLE
// Create an OBJECT with a number of properties
const people = [
  {
    name: 'Sophronia Kidstoun',
    bDay: '5/19/1974',
    children: 0,
    country: 'Egypt',
    canProgram: true,
  },
  {
    name: 'Nydia Dobbin',
    bDay: '8/9/1975',
    children: 4,
    country: 'France',
    canProgram: true,
  },
  {
    name: 'Benedicto Risbie',
    bDay: '6/22/1971',
    children: 1,
    country: 'China',
    canProgram: true,
  },
  {
    name: 'Melamie Coyle',
    bDay: '4/11/1985',
    children: 2,
    country: 'Canada',
    canProgram: false,
  },
  {
    name: 'Ellissa Surpliss',
    bDay: '2/20/1991',
    children: 1,
    country: 'Netherlands',
    canProgram: true,
  },
]

// -- Answer the following questions using if statements and console.log() -- 

// TASK 1: 
// Is the first person older than the last person?

// First - find what year it is today
const year = new Date().getFullYear();

// Second - find the year when the person was born
const birthYearFirst = new Date(people[0].bDay).getFullYear();
const birthYearLast = new Date(people[4].bDay).getFullYear();

// Third - find the age of each person by subracting the current year with the birthYear.
const ageFirst = year - birthYearFirst;
const ageLast = year - birthYearLast;

// Lastly - if ageFirst (age of first person) >(is greater than) ageLast (age of last person) is TRUE - then console.log('string'). If it is false : no output in console.
if (ageFirst > ageLast) {
  console.log(`Yes, ${people[0].name} is older than ${people[4].name}.`)
}


// TASK 2: 
// Does the 2nd person have the same amount of kids as the 3rd ?
// find amount of children each person has 
// x === (equals) y ?(is it - question) true :(or) false
const haveChildren = people[1].children === people[2].children ? true : false;
console.log(`Does the ${people[1].name} have the same amount of kids as ${people[2].name}? That is: ${haveChildren}`)

// TASK 3: 
/* 
- Create a statement that checks if the 1st person and the 4th person in the array both know how to program.
- If yes, output “Yay!”, if not output “LMGTFY”.
*/

// USE && - means if x is true AND y is also true, then the statement is true, otherwise false.
const theyProgram = people[0].canProgram && people[4].canProgram
if (theyProgram) {
  console.log('Yay!')
} else {
  console.log('LMGTFY')
}


// TASK 4: 
/*
- Create a statement that checks the 2nd person in the array for their nationality.
- If the person’s country is Iceland, output “Hæ”, if he / she is from Spain output “Hola”, if he / she is from Korea output “여보세요”).
- If the country is none of the above, output “Hello”.
*/

// Using Switch statement to check if statement is true.
const nationality = people[1].country;
switch (nationality) {
  case 'Iceland':
    console.log('Hæ')
    break;
  case 'Spain':
    console.log('Hola')
    break;
  case 'Korea':
    console.log('여보세요')
    break;
  //if none of the cases is true, then it outputs default:
  default:
    console.log('Hello')
}

// TASK 5:
// Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.

// find length of persons name.
const nameLength = people[1].name.length
// check if the persons name is greater than 5.
const isNameLength = (nameLength > 5) ? true : false;
//output true or false to question
console.log(`Is ${people[1].name} name longer than 5 characters? That is: ${isNameLength}`)