const text_box = document.getElementById("query-box");
const list = document.getElementById("list");

const root = new Trie();

const items = [
  "apple",
  "apricot",
  "banana",
  "pear",
  "guava",
  "cherry",
  "orange",
  "pineapple",
  "mango",
  "grapes",
  "blueberry",
  "raspberry",
  "melon",
  "blackberry",
  "plum",
  "kiwi",
  "peach",
  "strawberry",
  "avocado"
];


for (const item of items)
  root.insert(item);

function handler() {
  const str = text_box.value;
  list.innerHTML = "";
  if (str.length == 0) {
    return;
  }
  const predictions = root.search(str);
  for (const prediction of predictions)
    list.innerHTML += `<li><b>${str}</b>${prediction.substring(str.length)}</li>`;
}

text_box.addEventListener("keyup", handler);
