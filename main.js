console.log("banana"
);

const moment = require('moment');
const chalk = require('chalk');


// var now = moment();
// console.log(now);
// let day = moment("1995-12-25");
//  console.log(day);




 let date = new Date(2010, 1, 14, 15, 25, 50);
let wrapped = moment(date);
console.log("It is " + chalk.blue(wrapped.format('dddd, MMMM Do YYYY, h:mm:ss a')));
