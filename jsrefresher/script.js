// const firstname="Auriel";
// const lastname="Love";

// console.log(firstname);
// console.log(lastname);
// const fullname= '${firstname} ${lastname}';
// console.log(fullname);

// let population="Detroit";
// let numofpeople=100000;
// console.log(numofpeople * 3)

// const actualtemp= 72;
// const desiredtemp= 68;

// if (actualtemp > desiredtemp) {
//     console.log('run a/c');
// } else if (actualtemp < desiredtemp) {
//     console.log('Run Heat');
// } else {
//     console.log('standby');
// }


// note: you only have to do a repetitive console log once at the end
// let headingTitle="";
// let headingNumber=0;


// if (headingNumber === 1) {
//     headingTitle='Header 1'
// } else if (headingNumber === 2) {
//     headingTitle='Header 2'  
// } 
// console.log(headingTitle);




// switch (headingNumber) {
//     case 1:
//         headingTitle = 'Header 1'
//         break;
//     case 2:
//         headingTitle = 'Header 2'
//         break;
//     case 3:
//         headingTitle = 'Header 3'
//         break;
// }
// console.log(headingTitle);

// ** if you are not reassigning then you can just do below,if reassign, use above else if

// let trafficLight='green'

// if (trafficLight === 'green'){
//     // trafficLight= 'green'
//     console.log('GO');
// } else if (trafficLight === 'yellow') {
//     console.log('Slow Down');
// } else if (trafficLight === 'red') {
//     console.log('Stop');
// }


// switch (trafficLight) {
//     case 'green':
//         console.log('Go!')
//         break;
// }
// exercise 5
// const sumArray=(numbers) => {
//     let sum=0;
//     for(let i=0; 1 > numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// }
// const numbers=[2, 3, 4, 10, 20];

// sumArray(numbers)

// exer 6

// function checkLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return `Year ${year} is a leap year`;
//     } else if (year % 400 === 0) {
//         return `Year ${year} is a leap year`;
//     } else {
//         return `Year ${year} is not a leap year`;
//     }
// }

// console.log(checkLeapYear(2012)); //"Year 2012 is a leap year"
// conole.log(checkLeapYear(1900)); //"Year 1900 is not a leap year"
// console.log(checkLeapYear(2000)); //"Year 2000 is a leap year"
// console.log(checkLeapYear(2011)); //"Year 2011 is not a leap year"

// function evalNumbers(num1, num2, operation) {
//     if (operation === "add") {
//         let outcome = num1 + num2;
//         return `Sum of ${num1} and ${num2} is ${outcome}`;
//     } else if (operation === "subtract") {
//         let outcome = num1 - num2;
//         return `Sum of ${num1} and ${num2} is ${outcome}`;
//     } else if (operation === "multiply");
//         let outcome= num1 * num2;
//         return `Product of ${num1} and ${num2} is ${outcome}`;
 
//  evalNumbers(15, 10, "add") // "Sum of 15 and 10 is 25"
//  evalNumbers(24, 24, "subtract") // "Difference of 20 and 8 is 12"
//  evalNumbers(24, 24, "multiply") // "Product of 12 and 4 is 48"
//  evalNumbers(24, 24, "divide") // "Division of 28 and 7 is 4"
//  evalNumbers(24, 24, "modulus") // "Modulus of 22 and 3 is 1"
//  evalNumbers(24, 24, "square") // "square is an invalid operation"


// console.log "FizzBuzz" if i is divisible by 3 and 5.
// do numbers 1-10
// console.log "Fizz" if i is divisible by 3.
// console.log "Buzz" if i is divisible by 5.
// console.log i if none of the above conditions are true.


// function fizzBuzz(Number) {
//     for (let i=1; i <= Number; i++) {
//         if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
    
//     }
        
// }

// fizzBuzz(100)

// function areaofCircle(Radius) {
//     let circle= Radius * Radius * Math.PI;
//     return circle;
// }

// areaofCircle(5)

// function getCircumferenceofCircle(Radius) {
//     let circle= 2 * Math.PI * Radius;
//     return circle;
// }

// getCircumferenceofCircle(5)

// function getAreaofSquare(side) {
//     let square= side * side;
//     return square;
// }

// getAreaofSquare(5)

// function getAreaofTriangle(base, height) {
//     let area= base * height;
//     return area;
// }

// getAreaofTriangle





//a function tht takes 2 parameters, function name rockpapersciss

const rockPaperScissors = (player1select, player2select) => {
    //rock beats scissors and loses to paper
    //scissors beats paper and loses to rock
    //paper beats rock and loses to scissors
    //if player1select is equal to "rock" and player2select is equal to "paper" then print player2

    // if (player1select === `rock` && player2select === `paper`){
    //     console.log(`player 2 wins the round`);
    // } else if (player1select === `player` && player2select === `scissors"`{
    //     console.log(`player 1 wins the round`);
    // } else if (player1select === `rock` && player2select === `scissors`) {
    //     console.log(`player 1 wins the round`);
    // } else if (player1select === `paper` && player2select === `rock`) {
    //     console.log(`player 1 wins the round`);
    // } else if (player1select === player2select) {
    //     console.log(`it's a tie`);
    // }

//     //ternary example below
//     return player1selection === "paper" ? "player 1 wins the round" : "Player 2 wins the round";
// }
// //console.log(rockPaperScrissors(`rock));
// rockPaperScissors('rock','paper');
// rockPaperScissors(`paper`, `scissors`);

let a=1;
while (a < 11) {
    console.log(a);
    a++
}