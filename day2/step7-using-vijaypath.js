// console.log(require("./vijaypath"));

// let obj = require("./vijaypath");

// console.log(obj.myfun("vijay"));

// let path = require("node:path");
// let vijaypath = require("./vijaypath");
let Hero = require("./vijaypath").Hero;

// console.log(path.join("firstname",'lastname'));
// console.log(vijaypath.join(["firstname",'lastname']));

let hero = new Hero();

console.log(hero.fullname());