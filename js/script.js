const weight = parseInt(document.querySelector("#weight").value);
const height = parseInt(document.querySelector("#height").value);
const submitButton = document.querySelector("#btn-1");
const resetButton = document.querySelector("#btn-2");
const resultH2 = document.querySelector("h2.result");
const explanation = document.querySelector("h3.bmi-category");

function calculate(e) {
  e.preventDefault();
  // Logic to count BMI
  const bmiResult = (weight / ((height * height) / 10000)).toFixed(2);

  // Logic for BMI categories explanation
  let category;
  if (bmiResult < 18.5) {
    category = "kekurangan berat badan";
  } else if (bmiResult >= 18.5 && bmiResult < 25) {
    category = "berat badan ideal";
  } else if (bmiResult >= 25 && bmiResult < 30) {
    category = "kelebihan berat badan";
  } else {
    category = "kegemukan (obesitas)";
  }

  resultH2.innerText = bmiResult;
  explanation.innerText = `Kamu masuk kategori ${category}`;
}

submitButton.addEventListener("click", calculate);
resetButton.addEventListener("click", resetBMI);

function resetBMI() {
  weight = "";
  height = "";
}
