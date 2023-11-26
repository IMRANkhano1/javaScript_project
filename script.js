//selectinng popoupbox popupoverlay buttun
var adddoc = document.querySelector(".add-btn");
var popoverlay = document.querySelector(".popup-overlay");
var popbox = document.querySelector(".popup-box");

// function add() {
//   popoverlay.style.display = "block";
//   popbox.style.display = "block";
// }
//another method
adddoc.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popbox.style.display = "block";
});

//select cancel btn for prevent default submit.

var cancelbtn = document.getElementById("cancel-popup");

cancelbtn.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

//select container
//<button id="add-book">ADD</button>
//book-title-input
//book-author-input
//book-description-input

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var titleinput = document.getElementById("book-title-input");
var authorinput = document.getElementById("book-author-input");
var descriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = ` <h2>${titleinput.value}</h2>
  <h5>${authorinput.value}</h5>
  <p>
  ${descriptioninput.value}
  </p>
  <button onclick="del(event)">delete</button>`;
  container.append(div);
  popoverlay.style.display = "none";
  popbox.style.display = "none";
});

function del(event) {
  event.preventDefault();
  event.target.parentElement.remove();
}
