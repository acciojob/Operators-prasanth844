//your JS code here. If required.
// Calculator logic
document.getElementById("calculate").addEventListener("click", function () {
	let num1 = Number(document.getElementById("num1").value);
	let num2 = Number(document.getElementById("num2").value);
	let operator = document.getElementById("operator").value;
	let result;

	if (operator === "+") {
		result = num1 + num2;
	} else if (operator === "-") {
		result = num1 - num2;
	} else if (operator === "*") {
		result = num1 * num2;
	} else if (operator === "/") {
		result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
	}

	document.getElementById("result").innerText = result;
});

// Change text logic
document.getElementById("change_text").addEventListener("click", function () {
	let newText = ["Bye", "Good Bye", "To", "Your", "Class"];
	let elements = document.getElementsByClassName("division");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerText = newText[i];
	}
});
