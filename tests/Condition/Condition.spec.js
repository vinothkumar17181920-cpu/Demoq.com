// Employee Performance Rating Using Nested if//

let percentage = 35;

if (percentage >= 90) {
  if (percentage >= 95) {
    console.log("Exceptional");
  } else {
    console.log("Superb");
  }
} else if (percentage >= 80) {
  console.log("Great");
} else if (percentage >= 70) {
  console.log("Satisfactory");
} else if (percentage >= 60) {
  console.log("Moderate");
} else if (percentage >= 45) {
  console.log("Below Expectation");
} else {
  if (percentage > 30) {
    console.log("Underperforming");
  } else {
    console.log("Unsatisfactory");
  }
}