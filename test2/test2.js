let problem2 = require("../problem2.js");
let inventery = require("../inventery.js");
const sol=problem2(inventery);
const sol2=sol[0];
console.log(`Last car is ${sol2.car_make} model ${sol2.car_model}`);
