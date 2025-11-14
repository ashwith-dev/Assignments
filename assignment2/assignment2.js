 function Table() {
      const n = document.getElementById("number").value;
      let result = "";

      if (n === "") {
        document.getElementById("result").innerText = "Enter a number!";
        return;
      }

      for (let i = 1; i <= 10; i+=1) {
        result += n + " x " + i + " = " + (n * i)+ "<br>";
      }

      document.getElementById("result").innerHTML = result;
    }