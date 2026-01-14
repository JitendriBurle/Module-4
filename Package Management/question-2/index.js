import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic style
console.log(
  boxen(message, {
    title,
    padding: 0,
    margin: 0,
    borderStyle: "classic",
  })
);

console.log();

// SingleDouble style
console.log(
  boxen(message, {
    title,
    padding: 0,
    margin: 0,
    borderStyle: "singleDouble",
  })
);

console.log();

// Round style
console.log(
  boxen("unicorns love rainbows", {
    title,
    padding: 0,
    margin: 0,
    borderStyle: "round",
    backgroundColor: "magenta"
  })
);
