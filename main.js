
const moment = require('moment');
const chalk = require('chalk');
let now = moment();
let leapYear = (now.isLeapYear() ? chalk.green('is')  : chalk.red(' is not'));
let dst = (now.isDST() ? chalk.green('is')  : chalk.red(' is not'));
let days = moment().dayOfYear();
let seconds = (moment().second() + moment().minute()*60 + moment().hour()*3600);

// print out the date and time info
console.log("It is " + chalk.cyan(now.format('dddd, MMMM Do YYYY, h:mm:ss a')));
console.log("It is " + chalk.blue(seconds)+ " seconds into the day!")
console.log("It is the " + chalk.magenta(days+"th") + " day of the year!")
console.log('It ' + dst + ' during Day-Light Savings!');
console.log ('It' + leapYear + ' a leap Year!');

// print out leap year info with an if statement (true/false)
// if (leapYear === true){
//   console.log("It " + chalk.green("is") + " a leap Year!");
// } else {
//   console.log("It " + chalk.red("is not") + " a leap Year!");
// }

// print out DST info with an if statement (true/false)
// if (dst === true){
//   console.log("It " + chalk.green("is") + " during Day-Light Savings!");
// } else {
//   console.log("It " + chalk.red("is not") + " during Day-Light Savings!");
// }
