let problem3 = require("../problem3.js");
let inventery = require("../inventery.js");

let copyArray=Array.from(inventery);
let sol=problem3(copyArray);
//sol.map(element,index)
console.log(sol);