/*jshint esversion: 6 */

var err = [];

function login() {
  const name = document.getElementById("textbox-name").value;
  const email = document.getElementById("textbox-email").value;
  let err = [];
  let conditions = { // regex tested on https://regex101.com/
    "name": name.match(/^[a-zA-Z]+?(\s[a-zA-Z]+)+$/) != null,
    "email": email.match(/^\w+([\._-]{0,1}?\w+)+@\w+?\.[a-zA-Z]{2,3}\.{0,1}?[a-zA-Z]{1,2}$/) != null,
  };
  for (const [key, value] of Object.entries(conditions)) {
    if (!value) { err.push(" " + key); } // If field returned false on check, push key to err.
  }
  if (err.length === 0) {
    window.location.href = "./quiz.html", true;
    return;
  }
  alert(`Login unsuccessful due to invalid field input(s): ${err}`); // print err to screen using alert
}

function grade() {
  const pGrade = document.getElementById("p-grade");
  let questions = 3;
  let correct = 0;

  // Store all values from the form. While this can be written more shorthand, the cost of operation remains the same.
  const checkboxButton1 = document.getElementById("cb-q3-1").checked;
  const checkboxButton2 = document.getElementById("cb-q3-2").checked;
  const checkboxButton3 = document.getElementById("cb-q3-3").checked;
  const radioButton1 = document.getElementById("q1-opt1").checked;
  const radioButton2 = document.getElementById("q1-opt2").checked;
  const radioButton3 = document.getElementById("q1-opt3").checked;
  const radioButton4 = document.getElementById("q1-opt4").checked;
  const textarea = document.getElementById("textarea-q2").value;


  condCheckBox = checkboxButton1 || checkboxButton2 || checkboxButton3;
  condRadioButton = radioButton1 || radioButton2 || radioButton3 || radioButton4;
  condTextArea = textarea != "";

  if (!(condCheckBox && condRadioButton && condTextArea)) {
    alert("Missing inputs! Please make sure to answer everything.");
    return;
  }

  if (document.getElementById("q1-opt3").checked) { correct++; }
  if (document.getElementById("textarea-q2").value == 37.5) { correct++; }
  q3_ans = !document.getElementById("cb-q3-1").checked && document.getElementById("cb-q3-2").checked && document.getElementById("cb-q3-3").checked;
  if (q3_ans) { correct++; }

  let grade = (correct / questions) * 100;
  pGrade.innerHTML = `Your grade is ${grade.toFixed(2)}%`;
  return;
}
