// const square = function (x) {
//   return x ** 2;
// };

//ARRROW FUNCTION
// const square = (a) => {
//   return a ** 2;
// };
// const square = (a) => a ** 2;

// console.log(square(6));

// const event = {
//   name: "birthday",
//   printGuestList: function () {
//     console.log("guest list for " + this.name);
//   },
// };
const event = {
  name: "birthday",
  guestList: ["om", "sant", "saroj", "satyam", "rohit"],
  printGuestList() {
    //that = this;
    console.log("guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
// //with arrow
// const event = {
//   name: "birthday",
//   printGuestList: () => console.log(`guest list for ${event.name}`),
// };

event.printGuestList();
