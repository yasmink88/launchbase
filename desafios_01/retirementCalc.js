//Retirement calculator

const Name = "Yasmin";
const Gender = "M";
const Age = 45;
const WorkedYears = 40;

const SumContribution = Age + WorkedYears;

if (Gender === "M") {
  if (WorkedYears >= 35 && SumContribution >= 95) {
    console.log("You can retire!");
  } else {
    console.log("You can't retire yet!");
  }
}
if (Gender === "F") {
  if (WorkedYears >= 30 && SumContribution >= 85) {
    console.log("You can retire!");
  } else {
    console.log("You can't retire yet!");
  }
}

//Another solution

const RetirementMen =
  Gender == "M" && WorkedYears >= 35 && SumContribution >= 95;
const RetirementWomen =
  Gender == "F" && WorkedYears >= 30 && SumContribution >= 85;

if (RetirementMen || RetirementWomen) {
  console.log("You can retire!");
} else {
  console.log("You cannot retire yet!");
}
