document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("[data-number]");
  let userInput = "";
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event);
      let number = parseFloat(
        event.currentTarget.dataset.number
      );
      userInput += number;
      addInput();
    });
  });
  let operands = document.querySelectorAll("[data-action]");

  operands.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let action = event.currentTarget.dataset.action;

      switch (action) {
        case "multiply":
          userInput += "*";
          break;
        case "divide":
          userInput += "/";
          break;
        case "add":
          userInput += "+";
          break;
        case "subtract":
          userInput += "-";
          break;
        case "clear":
          userInput = "0";
          break;
        case "backspace":
          userInput = "";
          break;
        case "decimal":
          userInput += ".";
          break;
        case "equals":
          userInput = eval(userInput);
          break;
      }

      addInput();

      console.log(userInput);
    });
  });

  function addInput() {
    console.log(userInput);
    let display = document.getElementById("display");
    display.innerText = userInput;
  }
});