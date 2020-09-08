const fs = require("fs");

const getNotes = function (notes) {
  return notes;
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  //checking the title if already exists or not
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    // now adding element in the notes
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    // console.log(notes);
    console.log("new note added!");
  } else {
    console.log("note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
