"use strict";

let chancesLeft = 3;
let guessCorrect;
const firstPage1 = document.querySelector(".firstpage").classList;
const fristPage2 = document.querySelector(".content").classList;
const secondPage = document.querySelector(".second-page").classList;
const secondPagebtns = document.querySelector(".btngps").classList;
const thirdPage = document.querySelector(".overlay").classList;
const fourthPage = document.querySelector(".winmsg").classList;
const fifthPage = document.querySelector(".losemsg").classList;
const displayChancesLeft = document.querySelector(".chancesleft");
const revelation = document.querySelector(`.reveal`);
const theHintBtn = document.querySelector(`.hint`);
const modalClasslist = document.querySelector(".modal").classList;
const body = document.querySelector("body");
function closeBtn() {
  document.querySelector(".overlay").classList.add("hidden--3");
  modalClasslist.add("hidden");
  theHintBtn.style.display = "none";
}

secondPage.add("hidden--2");
secondPagebtns.add("hidden--2");
thirdPage.add("hidden--3");
fourthPage.add("hidden--4");
document.querySelector(".random").value = " ";
modalClasslist.add("hidden");
body.style.backgroundColor = "#7d7d7d";
fifthPage.add("hidden--5");
firstPage1.remove("hidden--1");
fristPage2.remove("hidden--1");
document.querySelector(".next").addEventListener("click", function () {
  const guess = Number(document.querySelector(".random").value);
  const low = 1;
  const high = 12;
  if (!guess || !(guess >= low && guess <= high)) {
    document.querySelector(".firstpage").textContent =
      "Invalid input. Enter a number between 1 and 12";
  } else {
    firstPage1.add("hidden--1");
    fristPage2.add("hidden--1");
    secondPage.remove("hidden--2");
    secondPagebtns.remove("hidden--2");
    displayChancesLeft.textContent = chancesLeft;
    revelation.classList.remove("btnshw2");

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    shuffle(arr);
    let arrBoxes = [];
    for (let i = 0, j = 0; i < arr.length, j < arr.length; i++, j++) {
      arrBoxes[j] = arr[i];
    }
    document.querySelector(".reveal").addEventListener("click", function () {
      for (let o = 1, p = 0; o <= arr.length, p < arr.length; o++, p++) {
        document.querySelector(`.qmark${o}`).textContent = arrBoxes[p];
      }
      document.querySelector(".revealer").textContent = `Hide`;
      document.querySelector(".reveal").addEventListener("click", function () {
        for (let o2 = 1; o2 <= arr.length; o2++) {
          document.querySelector(`.qmark${o2}`).textContent = `?`;
          document.querySelector(`.reveal`).classList.add("btnshw2");
        }
      });
    });

    for (let r = 0; r < arrBoxes.length; r++) {
      if (arrBoxes[r] === guess) {
        guessCorrect = r + 1;
      }
      document
        .querySelectorAll(".next2")
        [r].addEventListener("click", function () {
          if (guess === arrBoxes[r]) {
            secondPage.add("hidden--2");
            secondPagebtns.add("hidden--2");
            fifthPage.add("hidden--5");
            fourthPage.remove("hidden--4");
            body.style.backgroundColor = "#7fffd4";
          } else {
            chancesLeft--;
            document.querySelector(".chancesleft").textContent = chancesLeft;
            if (chancesLeft < 1) {
              secondPage.add("hidden--2");
              secondPagebtns.add("hidden--2");
              fifthPage.remove("hidden--5");
            }
          }
        });
    }
  }
  theHintBtn.addEventListener("click", function () {
    modalClasslist.remove("hidden");
    thirdPage.remove("hidden--3");
    if (guessCorrect % 2 === 0) {
      guessCorrect = `Green`;
    } else if (guessCorrect % 2 !== 0) {
      guessCorrect = `Red`;
    } else {
      guessCorrect = `Invalid`;
    }
    document.querySelector(".correctGuess").textContent = guessCorrect;
    document.querySelector(".close-modal").addEventListener("click", closeBtn);
    document.querySelector(".overlay").addEventListener("click", closeBtn);
  });
});

document.querySelector(".restart").addEventListener("click", function () {
  location.reload();
});
document.querySelector(".win").addEventListener("click", function () {
  location.reload();
});
document.querySelector(".lose").addEventListener("click", function () {
  location.reload();
});
