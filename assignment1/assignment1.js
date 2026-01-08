function calculateSum() {
      let n = document.getElementById('numInput').value;
      if (n < 1) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
      }
      
      let sum=0

      for(let i=0 ; i<=n ; i+=1){
        sum+=i;

      }
      document.getElementById('result').innerText = `Sum is ${sum}`;
      
    }
