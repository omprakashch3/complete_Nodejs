const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");
const { Console } = require("console");

const getNotes = (notes) => {
  return notes;
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  //checking the title if already exists or not
  //const duplicateNotes = notes.filter((note) => note.title === title); //after finding the desired element it will continue to filter till last elements
  const duplicateNote = notes.find((note) => note.title === title); //if it will find the desired element it will stop the operation there only
  //const duplicateNotes=notes.filter(function(note){
  //   return note.title===title;
  // })

  if (!duplicateNote) {
    // now adding element in the notes
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    // console.log(notes);
    console.log(chalk.green.inverse("new note added!"));
  } else {
    console.log(chalk.red.inverse("note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
const removeNotes = (title) => {
  const notes = loadNotes();
  // console.log(notes);
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("no note found"));
  }
};

const listAllNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("your notes..!"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNotes,
  listNotes: listAllNotes,
  readNote: readNote,
};
