 function pattern() {
      let n = document.getElementById('num').value;
      if (n === "" || n < 1) {
        document.getElementById('result').innerText = "Enter a positive integer.";
        return;
      }
       if (n > 100) {
          document.getElementById('result').innerText = "Number too large! Enter a number up to 100.";
          return;
      }
      let result = "";
      for (let i = 1; i <= n; i+=1) {
        result += "*".repeat(i)+"\n";
      }
      document.getElementById('result').innerText = result;
    }