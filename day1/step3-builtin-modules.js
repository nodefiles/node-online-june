let os = require("os");

console.log("Architecture ", os.arch());// X64
console.log("OS Cpus",os.cpus().length);// physical and logical cpus
console.log("OS first cpu",os.cpus()[0]);// 1st cpu details
console.log("Total memory in bytes",os.totalmem());// total memory value in bytes
console.log("Total memory in bytes",os.totalmem());// total memory value in bytes
console.log("Free memory in GB",(((os.totalmem() / 1024) / 1024) /1024 ));// total memory value in bytes
console.log("User Name",os.userInfo().username);