const fs = require("fs");

// const book = {
//   title: "Sanskriti Ke Char Adhyay",
//   author: "Ramdhari singh dinkar",
// };

// const bookJSON = JSON.stringify(book); //itwill return the json string representation
// // console.log(bookJSON);

// // const parseData = JSON.parse(bookJSON);
// // console.log(parseData);
// // console.log(parseData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// // console.log(dataBuffer.toString());
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const datacrypt = fs.readFileSync("1-json.json");

const data = datacrypt.toString();
const user = JSON.parse(data);
console.log(user);

user.name = "sant";
user.age = 28;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
