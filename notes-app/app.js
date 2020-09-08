const chalk = require("chalk");

const getnotes = require("./notes");

const command = process.argv[2];

if (command === "add") {
  //if we run command node app.js "add" then it will execute this part
  console.log("adding notes..");
} else if (command == "remove") {
  //if we run command node app.js "add" then it will execute this part
  console.log("removing a tag..");
}
