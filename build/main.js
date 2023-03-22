"use strict";
const generatorButton = document.querySelector(".generatorButton");
const passwordText = document.querySelector(".passwordText");
generatorButton === null || generatorButton === void 0 ? void 0 : generatorButton.addEventListener("click", function (e) {
    e.preventDefault();
    const mathRandom = Math.floor(Math.random() * 1000000000);
    passwordText.innerHTML = mathRandom;
});
