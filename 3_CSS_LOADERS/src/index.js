import styles from "./index.css";
import _ from "lodash";
import "./clearButton";

console.log(styles);

const btn1 = document.getElementById("button1");
btn1.addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

btn1.classList.add([styles.buttons]);
