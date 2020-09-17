const displayOnPage = function (message) {
  let el = document.createElement("p");
  el.textContent = message;
  let output = document.getElementById("output");
  output.appendChild(el);
};

let lilVariable = 'hello!'
console.log(lilVariable);
displayOnPage(lilVariable);
