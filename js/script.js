const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
const menu1 = document.getElementById("menu1");
const menuButton1 = document.getElementById("menuButton1");

menuButton1.addEventListener("click", function () {
  if (menu1.style.display === "none") {
    menu1.style.display = "block";
  } else {
    menu1.style.display = "none";
  }
});

const menu2 = document.getElementById("menu2");
const menuButton2 = document.getElementById("menuButton2");

menuButton2.addEventListener("click", function () {
  if (menu2.style.display === "none") {
    menu2.style.display = "block";
  } else {
    menu2.style.display = "none";
  }
});

const orderList = document.getElementById("orderList");
const orderCounts = {}; // Stores counts for each item

function orderItem(item) {
  // If item is already in the order, increment its count
  if (orderCounts[item]) {
    orderCounts[item]++;
  } else {
    orderCounts[item] = 1;
  }

  updateOrderList();
  alert(`${item} has been added to your basket`);
}
function updateOrderList() {
  orderList.innerHTML = ""; // Clear existing list

  for (let item in orderCounts) {
    const li = document.createElement("li");
    li.textContent = `${item} × ${orderCounts[item]}`;
    orderList.appendChild(li);
  }
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  location.reload();
});

function removeLatestOrder() {
  // Convert keys to an array and get the last added item
  const items = Object.keys(orderCounts);
  if (items.length === 0) return;

  const lastItem = items[items.length - 1];

  if (orderCounts[lastItem] > 1) {
    orderCounts[lastItem]--;
  } else {
    delete orderCounts[lastItem];
  }

  updateOrderList();
}

const greetButton = document.getElementById("greetButton");
const userNameInput = document.getElementById("username");
const greetingMessage = document.getElementById("greetingMessage");

function isValidName(name) {
  const namePattern = /^[a-zA-Z\s]+$/;
  return namePattern.test(name);
}

greetButton.addEventListener("click", function () {
  const username = userNameInput.value.trim();

  if (username === "") {
    greetingMessage.textContent = "Please enter your name.";
    greetingMessage.style.color = "red";
  } else if (!isValidName(username)) {
    greetingMessage.textContent = "Invalid input. Please use only letters.";
    greetingMessage.style.color = "red";
  } else {
    greetingMessage.textContent = `Hello, ${username}! Welcome to this page. I hope you'll enjoy buying here!`;
    greetingMessage.style.color = "green";
  }
});

const addParagraphButton = document.getElementById("addParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");

addParagraphButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent =
    "Mabuhay! Congratulations you got 15% discount! Show this message to the cashier.";
  paragraphContainer.appendChild(newParagraph);
});
