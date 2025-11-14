function calculateSum() {
      const n = document.getElementById('numInput').value;
      if (n < 1) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
      }

      let sum = (n * (n + 1)) / 2; 
      document.getElementById('result').innerText = `Sum is ${sum}`;
    }
