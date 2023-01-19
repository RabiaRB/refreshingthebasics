console.log

//TEMPERATURE CONVERTER

//initial temperature
const kelvin = 0;
//converting kelvin to celsius
let celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius`);
//converting to farhenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);


//DOG YEARS CALCULATOR

//get input age
let myAge = 8;

//calculation for 2 early years
let earlyYears = 2;

earlyYears *=10.5;

//calculation for remaining years 
let laterYears = myAge - 2;

laterYears *= 4;

//testing
console.log(earlyYears);
console.log(laterYears);


//adding the two parts
let myAgeInDogYears = earlyYears + laterYears ;

//string output
let myName = 'RABIYA'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


/// MAGIC EIGHT BALL

let userName = prompt('Enter name: ');

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = prompt('What is your question?');
console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(eightBall);

///RUNNER REGISTRATION

let raceNumber = Math.floor(Math.random() * 1000);



let earlyRegister = true;
let runnerAge = 18;

if (earlyRegister && runnerAge > 18){
  raceNumber += 1000;
}

if (earlyRegister && runnerAge > 18){
  console.log(`Your number is ${raceNumber} and you will race at 9:30 am.`);
}

else if (!earlyRegister && runnerAge > 18){
  console.log(`Your number is ${raceNumber}. Late adults run at 11:00 am`)
}

else if (runnerAge < 18){
  console.log(`Your number is ${raceNumber}. Youth registrants run at 12:30 pm (regardless of registration)`)
}

else {
  console.log('Please see the registration desk.')
}

