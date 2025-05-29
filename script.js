const buttons = "7,8,9,/,4,5,6,*,1,2,3,-,0,C,=,+".split(",");

const display = document.getElementById("display");
const calculator = document.querySelector(".calculator");
buttons.forEach((value) => {
    const button = document.createElement("button");
    if (!isNaN(value)) {
        button.classList.add("number");
    } else if (value === "C") {
        button.classList.add("clear");
    } else if (value === "=") {
        button.classList.add("equal");
    } else {
        button.classList.add("operator");
    }
    button.textContent = value;
    button.dataset.value = value;
    calculator.appendChild(button);
});

const updateDisplay = (value) => (display.value += value);

const clearDisplay = () => (display.value = "");

const calculateResult = () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
};

calculator.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    const value = e.target.dataset.value;
    if (!isNaN(value)) updateDisplay(value);
    else if (value === "C") clearDisplay();
    else if (value === "=") calculateResult();
    else updateDisplay(value);
});
