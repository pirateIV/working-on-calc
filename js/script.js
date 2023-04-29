const readOnlyDisplay = document.getElementById("displayOne");
let displayResult = document.getElementById("displayResult");

const keys = document.querySelectorAll(".key__buttons .calc__btn-number");
const operators = document.querySelectorAll(".key__buttons .calc__operator")
// functio

keys.forEach((number) => {
	number.style.backgroundColor = 'purple'

	number.addEventListener("click", updateNum)
	function updateNum(num){
		num = number.textContent;
		// seven = '7';
		// eight = 8;
		// nine = 9;
		// four = 4;
		// five = 5;
		// six = 6;
		// three = 3;
		// two = 2;
		// one = 1;
		// zero = 0;
		
		readOnlyDisplay.value += Number(num);
		displayResult.value += Number(num);


	}
	
	// update(7, 8, 9, 4, 5, 6, 3, 2, 1, 0)
});

// })

operators.addEventListener('click', operator());

function operator(oper){
	// readOnlyDisplay.value += displayResult.value + number;
	// readOnlyDisplay.value += oper;
	// readOnlyDisplay.value = ''

	readOnlyDisplay.value += oper.textContent;
	
	// oper = num;

}

const calc = document.getElementById("calculate");

calc.addEventListener('click', calculate);

function calculate(){
	displayResult.value = readOnlyDisplay.value;

}