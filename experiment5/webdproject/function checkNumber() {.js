function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    if (num % 2 === 0) {
        result.innerHTML = num + " is an Even Number";
        result.style.color = "green";
    } else {
        result.innerHTML = num + " is an Odd Number";
        result.style.color = "blue";
    }
}