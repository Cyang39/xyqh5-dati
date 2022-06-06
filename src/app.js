import data from "./qa.json";

const qa_list = data[0].split("ƒ").map(qa => qa.split('ß'));

const display = function(list) {
  const listItem = document.getElementById("list");
  listItem.innerHTML = "<ul>"+list.map(x =>
    "<li>" + x[0] + "（<span class=\"ans\">" + x[2] + "</span>）</li>").join("")
    + "</ul>";
}

const bar = document.getElementById("question-bar");
bar.addEventListener('input', function(event) {
  const input = event.target.value;
  if(input === "") display([]);
  else display(qa_list.filter(x => x.some(y => y.includes(input))).slice(0,20));
})

// display(qa_list.filter(x => x[1].includes("cyly")))