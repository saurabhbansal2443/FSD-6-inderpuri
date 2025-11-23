const inputTag = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const container = document.querySelector(".container");
const shapeOptions = document.getElementById("shapeOptions");
const backgroundColorInput = document.getElementById("backgroundColor");

submitBtn.addEventListener("click", function () {
  container.innerHTML = "";
  let numberOfBoxes = inputTag.value;
  let shape = shapeOptions.value;
  let backgroundColor = backgroundColorInput.value;

  console.log(backgroundColor);

  for (let i = 1; i <= numberOfBoxes; i++) {
    let box = document.createElement("div");

    box.classList.add(shape);
    box.style.backgroundColor = backgroundColor;
    container.appendChild(box);
  }
});
