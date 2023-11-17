let problem1 = require("../problem1.js");
let inventery = require("../inventery.js");
let sol1=problem1(inventery);
const ans=sol1[0];
console.log(`Car 33 is a ${ans.car_year} ${ans.car_make} ${ans.car_model}`);