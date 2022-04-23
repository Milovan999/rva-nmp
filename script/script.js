"use strict";

const validateForm = function (firstName, lastName, email, comment) {
  firstName = document.getElementById("form-fname").value;
  lastName = document.getElementById("form-lname").value;
  email = document.getElementById("form-email").value;
  comment = document.getElementById("form-textarea").value;
  if (firstName == "" || firstName == null) {
    alert("First Name field is empty!");
    return false;
  }
  if (lastName == "" || lastName == null) {
    alert("Last name field is empty!");
    return false;
  }
  if (email == "" || email == null) {
    alert("Email field is empty!");
    return false;
  }
  if (comment == "" || comment == null) {
    alert("Comment field is empty!");
    return false;
  } else {
    clearForms(firstName, lastName, email, comment);
    alert("Success!");
    return true;
  }
};

function clearForms(firstName, lastName, email, comment) {
  firstName = document.getElementById("form-fname").value = "";
  lastName = document.getElementById("form-lname").value = "";
  email = document.getElementById("form-email").value = "";
  comment = document.getElementById("form-textarea").value = "";
}

(function showMessage() {
  if (window.location.href == "file:///D:/rva-/index.html")
    alert("Welcome to BMW Catalog 2022 years!");
  else if (window.location.href == "file:///D:/rva-/about.html")
    alert("Welcome to about page!");
  else {
    alert("Welcome to contact page!");
    document
      .getElementById("buttonSubmit")
      .addEventListener("click", validateForm);

    document
      .getElementById("buttonClear")
      .addEventListener("click", clearForms);
  }
})();

var video = document.getElementById("bmw-video");
var btn = document.getElementById("myBtn");
var playPause = () => (video.paused ? play() : pause());
var play = function () {
  video.play();
  btn.innerHTML = "Pause";
};
var pause = function () {
  video.pause();
  btn.innerHTML = "Play";
};

const obj = {
  Authors: [
    {
      id: 1,
      firstName: "Markus",
      lastName: "Talic",
      age: 15,
      indNum: "MIT4/21",
    },
    {
      id: 2,
      firstName: "Aleksa",
      lastName: "Markovc",
      age: 22,
      indNum: "MIT1/21",
    },
    {
      id: 3,
      firstName: "Milovan",
      lastName: "Grbic",
      age: 23,
      indNum: "MIT19/21",
    },
  ],
};

const listAuthors = obj.Authors.forEach((element) =>
  console.log(
    `First Name: ${element.firstName}\nLast Name: ${element.lastName}\nIndex Number: ${element.indNum}\nAge: ${element.age}`
  )
);

const showRealAuthor = obj.Authors.filter(function (real) {
  if (real.firstName == "Milovan") {
    console.log(
      `Real Author is ${real.firstName} ${real.lastName}, ages: ${real.age}, Index Number: ${real.indNum}`
    );
  }
});

const mapAuthors = obj.Authors.map(({ id, indNum }) => {
  return { [id]: indNum };
});
console.log(mapAuthors);

const sortAuthors = obj.Authors.sort(function (a, b) {
  const nameA = a.firstName.toUpperCase();
  const nameB = b.firstName.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(sortAuthors);

const fullAges = obj.Authors.reduce((sum, author) => {
  return sum + author.age;
}, 0);
console.log("Sum is: " + fullAges);

function showTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = document.getElementById("date");
  dateTime.innerHTML = "Date: " + date + " " + time;
}
window.setTimeout(showTime, 50);
