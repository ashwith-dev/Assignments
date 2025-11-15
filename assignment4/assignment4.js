function calculate() {
  
  let m1 = document.getElementById("m1").value;
  let m2 = document.getElementById("m2").value;
  let m3 = document.getElementById("m3").value;

  if (m1 === "" || m2 === "" || m3 === "") {
    document.getElementById("result").innerText = "Please enter marks for all subjects.";
    return;
  }

  m1 = Number(m1);
  m2 = Number(m2);
  m3 = Number(m3);


  if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
    document.getElementById("result").innerText = "Enter your marks between 0 and 100.";
    return;
  }

  let total = m1 + m2 + m3;
  let avg = total / 3;
  let grade = "";

  if (avg >= 90) grade = "A";
  else if (avg >= 75) grade = "B";
  else if (avg >= 60) grade = "C";
  else grade = "Fail";

  document.getElementById("total").innerHTML = total
  document.getElementById("avg_marks").innerHTML = avg
  document.getElementById("grade").innerHTML = grade

}