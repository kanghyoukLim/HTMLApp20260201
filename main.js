
document.getElementById("generate-btn").addEventListener("click", () => {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    const numbers = new Set();
    while(numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement("span");
        numberElement.textContent = number;
        numberElement.classList.add("lotto-number");
        resultContainer.appendChild(numberElement);
    });
});
