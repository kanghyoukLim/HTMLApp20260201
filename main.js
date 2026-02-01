
document.getElementById("generate-btn").addEventListener("click", () => {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const numbers = new Set();
        while(numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        const numberSetElement = document.createElement("div");
        numberSetElement.classList.add("lotto-number-set");

        sortedNumbers.forEach(number => {
            const numberElement = document.createElement("span");
            numberElement.textContent = number;
            numberElement.classList.add("lotto-number");
            numberSetElement.appendChild(numberElement);
        });
        resultContainer.appendChild(numberSetElement);
    }
});

const themeSwitch = document.getElementById("checkbox");
const themeLabel = document.getElementById("theme-label");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeLabel.textContent = "Dark Mode";
    } else {
        themeLabel.textContent = "Light Mode";
    }
});
