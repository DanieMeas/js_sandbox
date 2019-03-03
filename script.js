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

console.log('Is Marks BMI higher than Johns ' + (markBmi > johnBmi)); 

/*IF ELSE STATEMENTS */
/* var firstName = 'John';
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
//fasly values: Udenfefined, null, 0, "", NaN
//Tuthy values: NOT falsey values

var height = 23; 

if (height || height === 0) {
  console.log('variable is defined');
  } else {
    console.log('variable has NOT been defined');
  }

  //Equality Operators
  if(height === '23'){
    console.log('The == operator does type coercion!');
  }
  
  */
//Coding challange 2
/*var jName ="john'sTeam";
var mName ="mark'sTeam";

var firstJohn = 5;
var secondJohn = 5;
var thirdJohn = 5;
var teamJohnAverage = (firstJohn + secondJohn + thirdJohn)/3;
  console.log(teamJohnAverage)

var firstMike = 5;
var secondMike = 5;
var thirdMike = 5;
var teamMikeAverage = (firstMike + secondMike + thirdMike)/3;
  console.log(teamMikeAverage)
  
  if(teamJohnAverage > teamMikeAverage) {
      console.log(jName + ' won with an average score of ' + teamJohnAverage);
    } else if (teamJohnAverage === teamMikeAverage) {
      console.log('its a tie with a score of ' + teamMikeAverage);
    } else {
      console.log(mName + ' won with an average score of ' + teamMikeAverage);
    }
    */

    //functions
    /*function calculateAge(year) {
      return 2018 - year;
    }

    var ageDanielle = calculateAge(1989);
    var ageThom = calculateAge(1979);
    var ageJohn = calculateAge(1948);
    console.log(ageDanielle, ageThom, ageJohn);

    function yearsUntilRetirement(year, firstName) {
      var age = calculateAge(year);
      var retirement = 65 - age;

      if(retirement > 0) {
        console.log(firstName = ' retires in '+ retirement + ' years.');
    } else {
      console.log(firstName + ' is already retired.')

    }
      }
    yearsUntilRetirement(1990,'Danielle');
    yearsUntilRetirement(1979, 'Thom');
    yearsUntilRetirement(1948, 'John');
   */
  
   //Function Statements & Expressions
   //Function Declaration Example:
   //Function whatDoYouDo(job, firstName){}

   

   //Function Expression Example:
    /*var whatDoYouDo = function(job, firstName) {
      switch(job) {
        case 'teacher':
          return firstName + ' teaches kids how to code';
        case 'driver':
          return firstName + ' drives an uber in Dallas';
        case 'designer':
          return firstName + ' designs beautiful websites';
        default:
          return firstName + ' does something else';
      }
   }
   console.log(whatDoYouDo('teacher', 'John'));
   console.log(whatDoYouDo('designer', 'Dean'));
   console.log(whatDoYouDo('default', 'Mark'));
   console.log(whatDoYouDo('driver', 'Bob')); 
   */

   //Arrays****

   //Initialize New Array
   /*var names = ['John', 'Mark','Jane'];
   var years = new Array(1990, 1969, 1948);

   console.log(names[2]);
   console.log(names.length);

   //Mutate Data
   names[1] = 'Ben';
   names[names.length] = 'Mary';
   console.log(names);

   //Different Data Types

   var john = ['John', 'Smith', 1990, 'teacher', false];
   john.push('blue');
   john.unshift('Mr');

   john.pop();
   john.pop();
   john.shift();
   console.log(john);

   console.log(john.indexOf(1990));

   var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
   console.log(isDesigner);

   //Coding Challange: */

   /*function tipCalculator(bill){
     var percentage; 
     if (bill < 50) {
       percentage = .2;
     } else if (bill >= 50 && bill <200){  
      percentage = .15;
     } else {
      percentage = .1;
    }
    return percentage * bill;
  }
  console.log(tipCalculator(100));  

  var bills = [124, 48, 268];
  var tips =[tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];

  var finalValues = [bills[0] + tips[0],
                     bills[1] + tips[1],
                     bills[2] + tips[2]];

console.log(tips, finalValues); */

//Objects and Properties

/*var john = {
    firstName: 'John',
    job: 'teacher',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false
    
};
  console.log(john.firstName);
  var x = 'birthYear';
  console.log(john[x]);

  john.job = 'designer';
  john['isMarried'] = true;
  console.log(john);

  // new object syntax
  var jane = new Object();
  jane.name = "Jane";
  jane.birthYear = 1969;
  jane['lastName'] = 'Smith';
  console.log(jane); */

  //Objects and Methods

  /*var john = {
    firstName: 'John',
    job: 'teacher',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false,
    calcAge: function(birthYear) {
      return 2018- this.birthYear;
    }
    
};
john.calcAge();
console.log(john); */

//Coding Challenge 

/*var john = {
  firstName: 'John',
  LastName: 'Smith',
  mass : 92,
  height : 1.95,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var mark = {
  firstName: 'Mark',
  LastName: 'Snow',
  mass : 78,
  height : 1.69,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}
john.calcBmi();
mark.calcBmi();
console.log(john, mark);

if (john.calcBmi > mark.calcBmi) {
  console.log(john.firstName + ' has a higher bMI of ' + john.bmi); 

  } else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higer BMI of ' + john.bmi);
  }
 */


 //Loops and Iteration 

 //for loop
 /*for (var i = 0; i < 10; i ++) {
   console.log(i);

 }
 
 // i = 0, 0 <10, log i to console, i ++
 //i = 1,1, 10 true, log i to the console, i ++
 //..
 //i = 10, 10>10 false, Exit the loop. 

 /*var john = ['John', 'Smith', 1990, 'teacher', false];
 for (var i = 0; i < john.length; i++){
   console.log(john[i]);
 }

 // while loop 
 while (i < john.length) {
   console.log(john[i]);
   i++;
 }
 */
 // continue and break statements
 /*var john = ['John', 'Smith', 1990, 'teacher', false];
 for (var i = 0; i < john.length; i++){
   if (typeof john[i] !== 'string') continue;
   console.log(john[i]);
 }

 //break

 var john = ['John', 'Smith', 1990, 'teacher', false];
 for (var i = 0; i < john.length; i++){
   if (typeof john[i] !== 'string') break;
   console.log(john[i]);
 }

 // looping backwards
 for (var i = john.lenth - 1; i >= 0; i-- ) {
   console.log(john[i]);
 }
*/
 var john = {
 fullName: 'John Smith',
 bills: [124, 48, 268, 180, 42],
 calcTips: function () {
   this.tips = [];
   this.finalValues = [];

   for (var i = 0; i < this.bills.length;)
   {
     // determine percentage based on tipping rules
     var percentage;
     var bill = this.bills[i];

     if (bill < 50) {
        percentage = .2;
     } else if (bill >= 50 && bill < 200) {
        percentage = .15;
     } else {
       percentage = .1;
     }
          // add results to corresponding arrays
     this.tips[i] = bill * percentage;
     this.finalValues[i] = bill + bill * percentage;

   }
 }
}

var mark = {
  fullName: 'Mark Snow',
  bills: [77, 475, 110, 45,],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
 
    for (var i = 0; i < this.bills.length;)
    {
      // determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
 
      if (bill < 100) {
         percentage = .2;
      } else if (bill >= 100 && bill < 300) {
         percentage = .1;
      } else {
        percentage = .25;
      }
      
     
      // add results to corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
 
    }
  }
 }

 function calcAverage(tips) {
   var sum = 0;
   for(var i = 0; i < tips.length; i ++) {
     sum = sum + tips[i];
   }
   return sum / tips.length;
 }

  mark.calcTips();
  john.calcTips();
  console.log(mark, john);

  john.average = calcAverage(john.tips);
  mark.average = calcAverage(mark.tips);
  console.log(john, mark);

  if(john.average > mark.average) {
    console.log(john.fullName + 'family pays hihger tips, with an average of $' 
    + john.average);
  } else if (mark.average > john.average) { 
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
  }
