let characters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
let symbols = [
  "!", "#", "$", "%", "&", "*", "+", ",", "-", ".",
  "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`",
  "{", "|", "}", "~", " "
];

let btn = document.getElementById("btn");
let firstDiv = document.getElementById("firstdiv");
let secondDiv = document.getElementById("seconddiv");
let digit = document.getElementById("inputy")
let checky = document.getElementById("toggle")

btn.addEventListener("click", function () {
  firstDiv.textContent = '';
  secondDiv.textContent = '';
  let pool = characters;
  if (checky.checked) {
    pool = characters.concat(symbols)
  }
  for (let i = 0; i < digit.value; i++) {
  let rolly = Math.floor(Math.random() * pool.length)
  let rolly2 = Math.floor(Math.random() * pool.length)
    let word = pool[rolly]
    let word2 = pool[rolly2]

    firstDiv.textContent += word;
    secondDiv.textContent += word2;
}})

  firstDiv.addEventListener("click", () => {
  if (firstDiv.textContent) {
    navigator.clipboard.writeText(firstDiv.textContent)
    alert("Copied")
  }})
  secondDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(secondDiv.textContent)
    alert("Copied")
  })

