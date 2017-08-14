
const moment = require('moment');
const chalk = require('chalk');
let now = moment();
let leapYear = now.isLeapYear();
let dst = now.isDST();

// print out the date and time info
console.log(now);
console.log("It is " + chalk.blue(now.format('dddd, MMMM Do YYYY, h:mm:ss a')));


// print out leap year info (true/false)
if (leapYear === true){
  console.log("It " + chalk.green("is") + " a leap Year!");
} else {
  console.log("It " + chalk.red("is not") + " a leap Year!");
}


// print out DST info (true/false)
if (dst === true){
  console.log("It " + chalk.green("is") + " during Day-Light Savings!");
} else {
  console.log("It " + chalk.red("is not") + " during Day-Light Savings!");
}
