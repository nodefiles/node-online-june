let ironman = require("./ironman");
let hulk = require("./hulk");
let thor = require("./thor");
let black_widow = require("./blackwidow");

/* 
let ironman_fullname = ironman.fullname();
let hulk_fullname = hulk.fullname();
let thor_fullname = thor.fullname();
let black_widow_fullname = black_widow.fullname(); 
*/

module.exports = {
    "avengers" : {
        ironman : {
            title : ironman.title,
            fullname : ironman.fullname()
        },
        hulk : {
            title : hulk.title,
            fullname : hulk.fullname()
        },
        thor : {
            title : thor.title,
            fullname : thor.fullname()
        },
        blackwidow : {
            title : black_widow.title,
            fullname : black_widow.fullname()
        }
    }
}