console.log("starting");

setTimeout(() => {
  console.log(" 2 second timer message");
}, 2000);

setTimeout(() => {
  console.log("1 second timer");
}, 1000);
setTimeout(() => {
  console.log("0 second timer");
}, 0);

console.log("stopping");
