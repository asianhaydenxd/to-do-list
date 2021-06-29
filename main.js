let entry = document.getElementById('entry');
let output = document.getElementById('output');

document.getElementById("entry").addEventListener(
  "keydown", function (event) {
    if (event.key === "Enter") {
      enterItem();
    }
  }
);

function enterItem() {
  if (entry.value === '') { return; }

  let item = document.createElement("LI");
  item.innerHTML = entry.value + ' <button onclick="mark(this)">X</button>';

  output.appendChild(item);
  entry.value = '';
}

function clearItems() {
  while (output.firstChild) {
    output.firstChild.remove();
  }
}

function mark(item) {
  item.parentNode.remove();
}