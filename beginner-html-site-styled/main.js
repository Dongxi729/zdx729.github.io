// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-icon2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
  let myName = prompt("请输入你的名字。");
  if (!myName || myName === null) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了," + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUsername();
};
