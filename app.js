window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable. 
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height)) 
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight)) 
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height) 
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>
			,indicating your weight is in the Underweight category for adults of your height.

			BMI is a screening measure and is not intended to diagnose disease or illness.
			
			Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being. Your healthcare provider might determine possible reasons for underweight and recommend support or treatment.
			
			Maintaining a weight in the healthy BMI range is one way to support overall health as you age.`;

		else if (bmi >= 18.6 && bmi < 24.9) 
			result.innerHTML = 
				`Normal : <span>${bmi}</span>
				,indicating your weight is in the Healthy Weight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness.

				Maintaining a weight in the healthy BMI range is one way to support overall health as you age.`;

		else if (bmi >= 25.0 && bmi < 29.9)
		result.innerHTML = 
				`Over Weight : <span>${bmi}</span>
				,indicating your weight is in the Overweight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness.

				Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being. Your healthcare provider might determine possible reasons for overweight and recommend support or treatment. Having excess weight can increase risk for chronic conditions, such as high blood pressure, type 2 diabetes, and high cholesterol. Take this 1-minute prediabetes risk test.
				
				Maintaining a weight in the healthy BMI range is one way to support overall health as you age.`;
			

		else result.innerHTML =
		`Obese : <span>${bmi}</span> 
		
		,indicating your weight is in the Obesity category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness.

		Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being. Your healthcare provider might determine possible reasons for overweight and recommend support or treatment. Having excess weight can increase risk for chronic conditions, such as high blood pressure, type 2 diabetes, and high cholesterol.
		
		Maintaining a weight in the healthy BMI range is one way to support overall health as you age.`;
	}
}
