const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");
const { string, demandOption } = require("yargs");

// customize yargs version
yargs.version("1.1.0");

// create add command ysing args
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: string,
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "listing out note",
  handler() {
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
// console.log(yargs.argv); //insted of this line we can use yargs.parse()
yargs.parse();

// if (command === "add") {
//   //if we run command node app.js "add" then it will execute this part
//   console.log("adding notes..");
// } else if (command == "remove") {
//   //if we run command node app.js "add" then it will execute this part
//   console.log("removing a tag..");
// }
