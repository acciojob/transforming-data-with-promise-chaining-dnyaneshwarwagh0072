document.getElementById("btn").addEventListener("click", function () {
    let inputValue = parseFloat(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
    }

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then(number => new Promise(resolve => {
        setTimeout(() => {
            number *= 2;
            outputDiv.textContent = `Result: ${number}`;
            resolve(number);
        }, 1000);
    }))
    .then(number => new Promise(resolve => {
        setTimeout(() => {
            number -= 3;
            outputDiv.textContent = `Result: ${number}`;
            resolve(number);
        }, 1000);
    }))
    .then(number => new Promise(resolve => {
        setTimeout(() => {
            number /= 2;
            outputDiv.textContent = `Result: ${number}`;
            resolve(number);
        }, 1000);
    }))
    .then(number => new Promise(resolve => {
        setTimeout(() => {
            number += 10;
            outputDiv.textContent = `Result: ${number}`;
            resolve(number);
        }, 1000);
    }))
    .then(finalResult => {
        outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
        outputDiv.textContent = `Error: ${error.message}`;
    });
});
