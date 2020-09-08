const chalk = require("chalk");
const yargs = require("yargs");

const getnotes = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// create add command ysing args
yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("adding a new note!");
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a notes!");
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "listing out note",
  handler: function () {
    console.log("listing out the notes!");
  },
});
//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a notes!");
  },
});

// const command = process.argv[2];
// console.log(process.argv);
console.log(yargs.argv);

// if (command === "add") {
//   //if we run command node app.js "add" then it will execute this part
//   console.log("adding notes..");
// } else if (command == "remove") {
//   //if we run command node app.js "add" then it will execute this part
//   console.log("removing a tag..");
// }
