/*
var firstName ='John';
var age = 28;
console.log(firstName +' '+ age);

var job, isMarried;
job = 'teacher';
isMarried = false;

age = 'twenty eight'
job = 'driver'

/*alert(firstName + ' is a ' + age + ' year old ' + job + ' is he married?' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);



var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

/* Logical Operators 
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments 
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 -6 // 32 -6 //26
console.log(x, y);

// more operators

x *= 2;
console.log(x);
x += 10; x
console.log(x);
x++;
console.log(x);

*/

/*
var johnMass = 58.9;
var johnHeight = 1.53;

var markMass = 77.1;
var markHeight = 1.65;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

console.log('Is Marks BMI higher than Johns ' + (markBmi > johnBmi)); */

/*IF ELSE STATEMENTS */
 var firstName = 'John';
 var maritalStatus = 'single';

 if (maritalStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :) ');
 }

 var isMarried = true;
 if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}
 
var johnMass = 58.9;
var johnHeight = 1.53;

var markMass = 77.1;
var markHeight = 1.65;

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

if (markBmi > johnBmi) {
    console.log('Mark\' BMI is higher than John\'s.');

}else {
    console.log('John\'s BMI is higher than Mark\'s.');

}


var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + 'is a boy');
} else if (age >= 13 && age < 20) {
console.log(firstName + 'is a teenager'); //between 13 and 20 === age >= 13 AND 20 age <20
} else if(age > 20 && age < 30){
    console.log(firstName + 'is a young man');
} else {
    console.log( firstName + 'is a man');
}


//Ternary Operator and Switch Statements

var firstName = 'John'; 
var age = 22;

age >= 18 ? console.log(firstName  + ' drinks beer')
: console.log(firstName  + ' drinks juice'); 


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement// 

var job = 'designer';
switch (job) {
    case 'teacher':
    case 'instructer':
    console.log(firstName + 'teaches kids to code');
    break;
    case 'driver':
    console.log(firstName + 'drives an uber in Dallas');
    break;
    case 'designer':
    console.log(firstName + 'designs beautiful websites');
    break;
    default: 
    console.log(firstName + 'John does something else');

}


age = 10;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + 'is a teenager');
        break;
    case age > 20 && age < 30:
        console.log(firstName + 'is a young man');
        break;
    default:
        console.log(firstName + 'is a man')

}




