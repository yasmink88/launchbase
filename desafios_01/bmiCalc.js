//BMI calculator

const Name = "Yasmin";
const Height = 1.65;
const Weight = 80;

//BMI = weight / (height * height)

const bmi = Weight / (Height * Height);

if (bmi >= 30) {
  console.log(`${Name}, your BMI is ${bmi}. You are overweight!`);
} else {
  console.log(`${Name}, your BMI is ${bmi}. Your weight is normal!`);
}
