console.log("starting app");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");

const user = os.userInfo();

const userAge = notes.calculateAge(1992, 2020);

const newArray = ["name", "name", "age", "age", 1, 2, 3, 4, 3, 3, 2];

const filteredArray = _.uniq(newArray);

console.log("Process", process.argv);
console.log("Yargs", yargs.argv);

console.log(filteredArray);
console.log(_.isString(true));
console.log(
  _.isEmpty({
    a: "a",
  })
);

console.log(process.argv);

fs.appendFileSync(
  "hello.txt",
  `hello ${user.username}! and you are ${userAge} years old`
);
